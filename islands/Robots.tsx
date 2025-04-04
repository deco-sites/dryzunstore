import { Head } from "$fresh/runtime.ts";

export default function TagRobots() {
  const search = `${globalThis.window?.location?.href}`;

  if (search.includes("?sort=")) {
    return (
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
    );
  }

  return (
    <Head>
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
