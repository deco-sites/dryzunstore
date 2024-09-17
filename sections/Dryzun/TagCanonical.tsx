import { useId } from "../../sdk/useId.ts";

const script = (id: string) => {
  const metaTag = document.createElement('meta');
  metaTag.name = 'author';
  metaTag.content = 'Dryzun';

  const linkTag = document.createElement('link');
  linkTag.rel = 'canonical';
  linkTag.href = window.location.pathname;

  document.head.appendChild(metaTag);
  document.head.appendChild(linkTag);
};

export default function TagCanonical() {
  const id = useId();
  const pathname = window.location.pathname;
  console.log('pathname::', pathname)

  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
    />
  );
}
