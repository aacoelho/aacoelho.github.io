import type { ElementType, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & { as?: ElementType; html?: string | null };

/**
 * Renders front-matter text as raw HTML, like Jekyll's `{{ value }}` did
 * (several fields contain links or <i> tags).
 */
export default function Html({ as: Tag = "span", html, ...rest }: Props) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html ?? "" }} />;
}
