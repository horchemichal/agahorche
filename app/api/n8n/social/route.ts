import { NextResponse } from "next/server";

/**
 * Inbound webhook FROM n8n when a new social post (IG/TikTok/YouTube) is
 * published, intended to seed a blog-post draft (spec §36/§37). Same
 * "stage as draft, never auto-publish" rule as /api/n8n/content.
 */
export async function POST(request: Request) {
  const secret = request.headers.get("x-n8n-secret");
  if (!process.env.N8N_INBOUND_SECRET || secret !== process.env.N8N_INBOUND_SECRET) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  // TODO: implement once there's a persistence layer for draft posts and
  // a defined mapping from { platform, url, transcript/caption } to a
  // BlogPostMeta draft.
  return NextResponse.json({ success: false, error: "Not implemented yet" }, { status: 501 });
}
