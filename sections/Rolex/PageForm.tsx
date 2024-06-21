import { Picture, Source } from "apps/website/components/Picture.tsx";
import Form from "../../islands/Form.tsx";

function PageForm() {
  return (
    <>
      <div class="w-full">
        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/4a55ff88-fbeb-4bd5-bbcd-a5db70d31089"
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee"
            width={2880}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/74a18c75-732c-4aee-9cad-d2ba387fbbee"
            alt="rolex watches"
          />
        </Picture>
      </div>
      <Form />
    </>
  );
}

export default PageForm;
