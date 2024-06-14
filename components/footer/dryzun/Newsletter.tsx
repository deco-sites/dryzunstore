import { invoke } from "../../../runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

export interface Props {
    content: {
        title?: string;
        description?: string;
    };
}

function Newsletter({ content }: Props) {
    const loading = useSignal(false);

    const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            loading.value = true;

            const email =
                (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

            await invoke.vtex.actions.newsletter.subscribe({ email });
        } finally {
            loading.value = false;
        }
    };

    return (
        <div class="py-16 bg-[#F5F3F0] px-[2%] md:px-0">
            <h3
                class="text-center text-2xl not-italic font-normal leading-[normal] tracking-[1.2px] uppercase text-[#333] mb-2">
                {content?.title ?? 'Fique por dentro das nossas novidades'} </h3>
            <p class="text-center text-sm not-italic font-light leading-[normal] tracking-[0.7px]">{content?.description ?? 'Informe seu e-mail e receba a newsletter Dryzun'}</p>
            <form onSubmit={handleSubmit} class="w-full md:w-[482px] mt-8 mx-auto flex items-center">
                <input
                    class="w-full h-12 bg-white px-4 py-0 border-0 shadow-0 outline-none text-left text-sm not-italic font-light leading-[normal] tracking-[0.7px] text-[#333]"
                    name="email" type="email" placeholder="Digite seu e-mail" />
                <button disabled={loading} class="disabled:loading bg-[#B4CBF0] hover:bg-[#81A1D4] transition-[.3s] flex h-12 justify-center items-center px-4 py-2.5 text-[#243959]">enviar</button>
            </form>
        </div>
    );
}

export default Newsletter;