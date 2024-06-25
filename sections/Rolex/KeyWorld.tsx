import { Head } from "$fresh/runtime.ts";

interface Props {
    keywords: string;
}

export default function KeyWorld({ keywords }: Props) {
    return (
        <Head>
            <meta name="keywords" content={keywords ?? ''} />
        </Head>
    );
}