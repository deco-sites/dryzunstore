import type { Json } from "apps/admin/widgets.ts";
import { Head } from "$fresh/runtime.ts";

export interface Props {
  data?: Json;
}

export default function DataStructured({ data }: Props) {
  const jsonLd = data ? JSON.parse(data) : null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </Head>
  );
}
