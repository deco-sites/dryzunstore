import { Head } from "$fresh/runtime.ts";
import Canonical from "../../islands/Canonical.tsx";

export interface Props {
  keywords?: string;
}

export default function TagKeyWord({ keywords }: Props) {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords ?? ""} />
      </Head>

      <Canonical />
    </>
  );
}
