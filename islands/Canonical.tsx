import { Head } from "$fresh/runtime.ts";

export default function Canonical() {
  const pathname = `${globalThis.window?.location.pathname}`;

  return (
    <Head>
      <link rel="canonicalll" href={pathname} />
    </Head>
  );
}
