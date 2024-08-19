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
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/f40783f9-efbe-426a-b244-a7fe4784473f"
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d0bbc118-63e9-4698-be3f-10ad8e4cd934"
            width={2880}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/d0bbc118-63e9-4698-be3f-10ad8e4cd934"
            alt="rolex watches"
          />
        </Picture>
      </div>
      <Form type="contact" valueInput="" />
    </>
  );
}

export default PageForm;
