/**
 * Renders the CMS's "prosty edytor treści" (spec §7/§9) output. The editor
 * itself is just a plain textarea — content is stored as plain text with
 * blank-line-separated paragraphs. Rendering it this way (mapping to real
 * <p> tags) instead of `dangerouslySetInnerHTML` means there is no HTML/XSS
 * surface to sanitize: whatever an admin types can never inject markup.
 */
export function SimpleContent({ content, className }: { content: string; className?: string }) {
  const paragraphs = content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return null;

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-neutral-700 leading-relaxed last:mb-0">
          {paragraph.split("\n").map((line, lineIndex) => (
            <span key={lineIndex}>
              {lineIndex > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
