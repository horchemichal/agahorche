import { randomUUID } from "node:crypto";
import type { MediaAsset } from "@/types/media";
import { isPostgresConfigured, getPostgresPool, pgInsert } from "@/lib/database/postgres";
import { MemoryStore } from "@/lib/database/memory-store";
import { getGlobalSingleton } from "@/lib/database/global-singleton";

export interface MediaRepository {
  list(): Promise<MediaAsset[]>;
  get(id: string): Promise<MediaAsset | null>;
  create(asset: Omit<MediaAsset, "id" | "createdAt">): Promise<MediaAsset>;
  updateAltText(id: string, altText: string): Promise<MediaAsset>;
  remove(id: string): Promise<void>;
}

function rowToAsset(row: Record<string, unknown>): MediaAsset {
  return {
    id: row.id as string,
    fileName: row.file_name as string,
    url: row.url as string,
    altText: (row.alt_text as string) ?? "",
    storageProvider: row.storage_provider as MediaAsset["storageProvider"],
    sizeBytes: (row.size_bytes as number) ?? 0,
    mimeType: (row.mime_type as string) ?? "application/octet-stream",
    createdAt: row.created_at as string,
    uploadedBy: (row.uploaded_by as string | null) ?? null,
  };
}

class PostgresMediaRepository implements MediaRepository {
  private pool = getPostgresPool()!;

  async list(): Promise<MediaAsset[]> {
    const result = await this.pool.query("select * from media_assets order by created_at desc");
    return result.rows.map(rowToAsset);
  }

  async get(id: string): Promise<MediaAsset | null> {
    const result = await this.pool.query("select * from media_assets where id = $1", [id]);
    return result.rows[0] ? rowToAsset(result.rows[0]) : null;
  }

  async create(asset: Omit<MediaAsset, "id" | "createdAt">): Promise<MediaAsset> {
    const row = await pgInsert(this.pool, "media_assets", {
      file_name: asset.fileName,
      url: asset.url,
      alt_text: asset.altText,
      storage_provider: asset.storageProvider,
      size_bytes: asset.sizeBytes,
      mime_type: asset.mimeType,
      uploaded_by: asset.uploadedBy,
    });
    return rowToAsset(row as Record<string, unknown>);
  }

  async updateAltText(id: string, altText: string): Promise<MediaAsset> {
    const result = await this.pool.query(
      "update media_assets set alt_text = $1 where id = $2 returning *",
      [altText, id],
    );
    if (!result.rows[0]) throw new Error("Media not found");
    return rowToAsset(result.rows[0]);
  }

  async remove(id: string): Promise<void> {
    await this.pool.query("delete from media_assets where id = $1", [id]);
  }
}

class InMemoryMediaRepository implements MediaRepository {
  private store = new MemoryStore<MediaAsset>((m) => m.id);

  async list(): Promise<MediaAsset[]> {
    return this.store.list().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  async get(id: string): Promise<MediaAsset | null> {
    return this.store.get(id) ?? null;
  }

  async create(asset: Omit<MediaAsset, "id" | "createdAt">): Promise<MediaAsset> {
    return this.store.set({ ...asset, id: randomUUID(), createdAt: new Date().toISOString() });
  }

  async updateAltText(id: string, altText: string): Promise<MediaAsset> {
    const existing = this.store.get(id);
    if (!existing) throw new Error("Media not found");
    return this.store.set({ ...existing, altText });
  }

  async remove(id: string): Promise<void> {
    this.store.delete(id);
  }
}

export function getMediaRepository(): MediaRepository {
  return getGlobalSingleton("mediaRepository", () =>
    isPostgresConfigured()
      ? new PostgresMediaRepository()
      : new InMemoryMediaRepository(),
  );
}
