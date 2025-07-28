import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

export interface Props {
  content: {
    title?: string;
    text?: string;
  };
}

function Newsletter({ content }: Props) {
  const loading = useSignal(false);
  const success = useSignal(false);
  const checkbox = useSignal(false);
  const error = useSignal("");

  const isEmail = (email: string) => {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
        email,
    );
};

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      loading.value = true;

      const email = (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;
      const name = (e.currentTarget.elements.namedItem("name") as RadioNodeList)?.value;

      console.log({
        email,
        name,
      });

      await fetch("/api/dataentities/NL/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
        }),
      }).then(() => {
        success.value = true;
        e.currentTarget?.elements?.reset();
      });
    } finally {
      loading.value = false;
      success.value = true;
    }
  };

  return (
    <div class="container-2 py-16 bg-[#F5F5F5]">
      <div class="flex items-start gap-8 justify-center flex-wrap">
        <div class={`w-[314px] flex flex-col justify-center items-start gap-8 ${success.value ? 'hidden' : ''}`}>
          <h3 class="text-[#333] text-2xl not-italic font-light leading-[normal] tracking-[1.2px]">
            {content?.title ?? "Inscreva-se em nossa newsletter"}
          </h3>

          <p class="text-[#333] text-sm not-italic font-extralight leading-[19px] tracking-[0.7px]">
            Assine a nossa newsletter e descubra o brilho do universo das joias Dryzun.
          </p>
        </div>
      
        <form onSubmit={handleSubmit} class={`flex w-[300px] flex-col items-start gap-4 ${success.value ? 'hidden' : ''}`}>
          <div class="w-full mb-2">
            <label class="text-[#333] text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
              Nome
            </label>

            <input
              class="w-full border-b-[#999793] border-b border-solid text-[#333] px-1 bg-[#F5F5F5] outline-none p-[5px]"
              name="name"
              type="name"
              required
            />
          </div>

          <div class="w-full mb-2">
            <label class="text-[#333] text-sm not-italic font-light leading-[normal] tracking-[0.7px]">
              E-mail
            </label>

            <input
              class="w-full border-b-[#999793] border-b border-solid text-[#333] px-1 bg-[#F5F5F5] outline-none p-[5px]"
              name="email"
              type="email"
              required
              onBlur={(e) => {
                if (isEmail(e.currentTarget.value)) {
                  error.value = "";
                } else {
                  error.value = "Por favor, insira um e-mail válido";
                }
              }}
            />

            <p class={`text-[red] text-xs mb-[-5px] mt-[5px] font-light ${error.value ? 'block' : 'hidden'}`}>
              {error.value}
            </p>
          </div>

          <button
            type="submit"
            disabled={!checkbox.value}
            class="w-full text-[#597CB2] text-center text-xs not-italic font-normal leading-[normal] tracking-[0.6px] uppercase border-[0.5px] border-solid border-[#81A1D4] py-4 transition-[.3s] hover:text-[#FFF] hover:bg-[#81A1D4] disabled:opacity-50"
          >
            Entrar no Universo Dryzun
          </button>
        </form>
      </div>


      {success.value && (
        <div class="flex items-start gap-8 justify-center">
          <p class="text-[#333] text-2xl not-italic font-light leading-[normal] tracking-[1.2px]">
            Bem vindo ao universo Dryzun!
          </p>
        </div>
      )}

      <div class={`flex items-start gap-8 justify-center ${success.value ? 'hidden' : ''}`}>
        <div class="max-md:px-[25px] max-md:py-0 flex items-center gap-2 mt-8"> 
          <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            class="rounded w-4 h-4" 
            checked={checkbox.value} 
            onChange={() => checkbox.value = !checkbox.value} 
          />

          <label for="checkbox" class="max-md:text-xs text-[#333] text-sm not-italic font-extralight leading-[19px] tracking-[0.7px]">
            Li e concordo com os <a href="/termos-e-condicoes" class="text-[#597CB2]">Termos e Condições</a> e com a <a href="/politica-de-privacidade" class="text-[#597CB2]">Política de Privacidade</a> da Dryzun
          </label>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
