import { Head } from "$fresh/runtime.ts";

export interface Props {
  noindex?: string;
  nofollow?: string;
}

export default function TagRobots({ noindex, nofollow }: Props) {
  console.log({ noindex, nofollow });

  return (
    <Head>
      <meta name="robots" content={`${noindex || "index"}, ${nofollow || "follow"}`} />
    </Head>
  );
}
