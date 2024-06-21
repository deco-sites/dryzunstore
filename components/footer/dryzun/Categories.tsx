interface ItemsI {
  label: string;
  link: string;
  newTab: boolean;
}

interface LinkI {
  label: string;
  link: string;
  items: ItemsI[];
}

interface Props {
  categories: LinkI[];
}

function Categories({ categories }: Props) {
  return (
    <>
      <div class="hidden md:flex py-12 flex-row gap-6 justify-between items-start">
        {categories &&
          categories?.map((categorie: LinkI) => (
            <div class="w-auto md:flex flex-col">
              <h3 class="mb-4">
                <a
                  class="text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]"
                  href={categorie?.link}
                >
                  {categorie?.label}
                </a>
              </h3>
              <div class="flex flex-col gap-2">
                {categorie &&
                  categorie.items?.map((sub: ItemsI) => (
                    <a
                      target={sub.newTab ? "_blank" : "_self"}
                      class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]"
                      href={sub?.link}
                    >
                      {sub?.label}
                    </a>
                  ))}
              </div>
            </div>
          ))}
      </div>
      <div class="flex md:hidden py-0 flex-col justify-between items-start">
        {categories &&
          categories?.map((categorie: LinkI) => (
            <div
              class={`w-full flex-col border-[#E0DEDA] rounded-none border-b border-solid ${
                categorie?.items?.length > 0
                  ? "collapse collapse-arrow"
                  : "single-link"
              }`}
            >
              {categorie?.items?.length > 0 && (
                <input type="checkbox" name="my-accordion-2" />
              )}
              <h3 class="w-full flex items-center collapse-title text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] after:text-[#666461]">
                {categorie?.items?.length < 1
                  ? <a href={categorie?.link}>{categorie?.label}</a>
                  : categorie?.label}
              </h3>
              <div class="collapse-content flex flex-col gap-2">
                {categorie &&
                  categorie.items?.map((sub: ItemsI) => (
                    <a
                      target={sub.newTab ? "_blank" : "_self"}
                      class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]"
                      href={sub?.link}
                    >
                      {sub?.label}
                    </a>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Categories;
