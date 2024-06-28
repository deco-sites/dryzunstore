import { Head } from "$fresh/runtime.ts";

export default function Canonical() {
    const pathname = `vish${globalThis.window.location.pathname}`;
    console.log("canonica=", pathname);

    return (
        <Head>
            <link rel="canonical" href={`${pathname}`} />
        </Head>
    );
}