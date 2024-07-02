import Icon from "../../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

export default function BackToTopRolex() {
  return (
    <>
      <section class="bg-black">
        <div class="rolex-container flex items-center justify-center">
          <Image
            class="max-md:w-[120px]"
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/869d32f2-490d-42c5-8199-1045aa7da989"
            alt="logo tudor footer"
            width={120}
            height={120}
          />
        </div>
      </section>
      <section class="bg-black py-5 flex justify-center">
        <a
          href="#top"
          class="w-[50px] h-[50px] flex items-center justify-center bg-white text-black border rounded-[100%] border-solid border-white"
        >
          <Icon
            size={24}
            id="ChevronUp"
            strokeWidth={3}
          />
        </a>
      </section>
    </>
  );
}
