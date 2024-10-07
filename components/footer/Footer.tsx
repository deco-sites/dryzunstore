import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";

import Categories from "./dryzun/Categories.tsx";
import Institucionais from "./dryzun/Institucionais.tsx";
import Newsletter from "../../islands/Newsletter.tsx";
import Payments from "./dryzun/Payments.tsx";
import Security from "./dryzun/Security.tsx";
import Copyrigth from "./dryzun/Copyrigth.tsx";

interface NewsletterI {
  /** @description Titulo */
  title?: string;
  /** @description Descrição */
  /** @format textarea */
  text?: string;
}

interface ContactI {
  /** @description Telefone */
  phone?: string;
  /** @description WhatsApp */
  whats?: string;
  /** @description E-mail */
  email?: string;
  /** @description Horário de funcionamento */
  /** @format textarea */
  clock?: string;
}

/**
 * @titleBy label
 */
interface LinkI {
  /** @description Label */
  label?: string;
  /** @description Link */
  link?: string;
  /** @description Abrir em nova aba */
  newtab?: boolean;
}

/**
 * @titleBy label
 */
interface SocialI {
  /** @description Label */
  label?: string;
  /** @description Link */
  link?: string;
  /** @description Icone */
  image?: ImageWidget;
}

/**
 * @titleBy label
 */
interface PaymentI {
  /** @description Icone */
  label?: string;
  image?: ImageWidget;
}

/**
 * @titleBy label
 */
interface CategorieI {
  /** @description Label */
  label?: string;
  /** @description Link */
  link?: string;
  /** @description Subcategorias */
  items?: LinkI[];
}

interface Props {
  /** @description Newsletter */
  newsletter: NewsletterI;
  /** @description Contato */
  contact: ContactI;
  /** @description Sobre nós */
  aboutlinks: LinkI[];
  /** @description Dúvidas */
  doubtslinks: LinkI[];
  /** @description Icones de rede social */
  sociais: SocialI[];
  copyrigth?: string;
  /** @description Icones de pagamento */
  payments: PaymentI[];
  /** @description Categorias */
  categories: CategorieI[];
}

function Footer(
  {
    newsletter,
    contact,
    aboutlinks,
    doubtslinks,
    sociais,
    copyrigth,
    payments,
    categories,
  }: Props,
) {
  return (
    <footer class="bg-white">
      <Newsletter content={newsletter} />

      <div class="container-2">
        <Institucionais
          contact={contact}
          aboutlinks={aboutlinks}
          doubtslinks={doubtslinks}
          sociais={sociais}
        />

        <div class="flex flex-wrap gap-6 justify-between py-6 border-[#E0DEDA] border-t border-b border-solid">
          <Payments payments={payments} />
          <Security />
        </div>

        <Categories categories={categories} />
        <Copyrigth copyrigth={copyrigth} />

        <div class="flex justify-center items-center py-4">
          <a
            class="flex items-center bg-[#F5F3F0] text-xs not-italic font-bold leading-[normal] tracking-[1.2px] uppercase text-[#333] px-6 py-4"
            href="#top"
          >
            voltar ao topo{" "}
            <Icon class="ml-2" id="ChevronUp" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
