import { Head } from "$fresh/runtime.ts";

export default function Canonical() {
  const pathname = `${window.location.pathname}`;

  return (
    <Head>
      <link rel="canonical" href={``} />
    </Head>
  );
}
