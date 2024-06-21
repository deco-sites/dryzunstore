export default function Cashback() {
  return (
    <div class="w-full">
      <div class="container-2 flex items-start">
        <div class="w-[50%] bg-[#f2f2f2] py-8">
          <h1 class="text-center text-4xl font-semibold mt-[100px]">
            ATIVE O SEU CASHBACK
          </h1>
          <h2 class="text-center text-2xl font-semibold mt-[100px] mb-2.5">
            O QUE É CASHBACK?
          </h2>
          <p class="max-w-[475px] mx-auto text-center text-xl font-normal mb-[100px]">
            <b>Cashback é dinheiro de volta.</b>{" "}
            A cada pedido realizado no site, em compras de produtos Dryzun, você
            ganha 10% em bônus para sua próxima compra.
          </p>
          <a
            class="w-[235px] h-[46px] flex items-center justify-center text-white bg-black mx-auto my-[100px]"
            href="https://www.crmbonus.com/ecc2/MzQwMDM="
            target="_blank"
          >
            GERAR MEU CUPOM
          </a>
        </div>
        <div class="w-[50%] flex flex-col items-center justify-center">
          <h2 class="text-2xl mt-[70px] mb-4">COMO FUNCIONA?</h2>
          <img
            loading="lazy"
            width={48}
            height={48}
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c83da2dc-ec1b-4ea0-96d1-19df7d1e4147"
            alt="cart"
          />
          <p class="max-w-[360px] text-center text-lg my-[25px]">
            Faça um pedido no site, em compras de um produto da marca Dryzun
          </p>
          <img
            loading="lazy"
            width={20}
            height={46}
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/83666c71-ecd2-4139-b3b0-005a5ec87d31"
            alt="arrow"
          />
          <img
            class="mt-2"
            loading="lazy"
            width={33}
            height={50}
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/9e6e99a6-66d7-4f11-81c7-7f8bf892f78c"
            alt="phone"
          />
          <p class="max-w-[360px] text-center text-lg my-[25px]">
            Faça um pedido no site, em compras de um produto da marca Dryzun
          </p>
          <img
            loading="lazy"
            width={20}
            height={46}
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/83666c71-ecd2-4139-b3b0-005a5ec87d31"
            alt="arrow"
          />
          <img
            class="mt-2"
            loading="lazy"
            width={48}
            height={48}
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/c83da2dc-ec1b-4ea0-96d1-19df7d1e4147"
            alt="cart"
          />
          <p class="max-w-[360px] text-center text-lg mt-[25px]">
            Faça uma nova compra com valor mínimo do dobro do seu bônus
          </p>
        </div>
      </div>

      <div class="container-2 flex items-center">
        <div class="w-[50%]">
          <img
            class="w-full"
            width={500}
            height={500}
            loading="lazy"
            src="https://dryzun.vteximg.com.br/arquivos/ids/167025/Prancheta%201.jpg?v=638388719160770000"
            alt="banner cashback"
          />
        </div>
        <div class="w-[50%] flex items-center justify-center">
          <div class="max-w-[475px]">
            <h2 class="text-center text-[34px] mb-[70px]">
              SE ATENTE AS REGRAS
            </h2>
            <p class="text-xl font-semibold mb-2">Aproveite por 60 dias</p>
            <p class="text-xl">
              O crédito é válido por 60 dias, iniciando em 7 dias após a
              primeira compra.
            </p>
            <p class="text-xl font-semibold mb-2">
              Até 50% de desconto
            </p>
            <p class="text-xl">
              Você poderá utilizar o cupom para descontar até 50% do valor do
              pedido. A utilização de valor parcial do crédito não é permitida.
            </p>
            <p class="text-xl font-semibold mb-2">
              Atenção ao valor da compra
            </p>
            <p class="text-xl">
              Valor mínimo de compra é o dobro do seu bônus. Não cumulativo com
              outras promoções
            </p>
            <a
              class="w-[235px] h-[46px] flex items-center justify-center text-white bg-black mx-auto mt-[100px]"
              href="https://www.crmbonus.com/ecc2/MzQwMDM="
              target="_blank"
            >
              CONSULTE SEU BÔNUS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
