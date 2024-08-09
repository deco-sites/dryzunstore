import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  pageInfo: {
    currentPage: number;
    nextPage: string | undefined;
    previousPage: string | undefined;
    records?: number | undefined;
    recordPerPage?: number | undefined;
  };
}

export default function PaginationCustom(
  { pageInfo }: Props,
) {
  if (!pageInfo.records || !pageInfo.recordPerPage) return;

  const pageFormated = pageInfo.nextPage
    ? pageInfo.nextPage.split("page=")[0]
    : "?";

  const links = [];
  const totalPages = Math.ceil(pageInfo.records / pageInfo.recordPerPage);

  for (let i = 1; i <= totalPages; i++) {
    links.push({
      "label": i,
      "href": `${pageFormated}page=${i}`,
      "show": i < 5 && pageInfo.currentPage < 4
        ? true
        : i > pageInfo.currentPage - 3 && i < pageInfo.currentPage + 2
        ? true
        : false,
    });
  }

  return (
    <div class="flex justify-center my-4">
      <div class="flex items-center">
        <a
          aria-label="previous page link"
          rel="prev"
          href={pageInfo.previousPage ?? "#"}
          class={`mr-1 ${
            pageInfo.currentPage === 1 ? "hidden" : "flex"
          } items-center justify-center text-[#B4CBF0] w-8 h-8 hover:text-white hover:bg-[#B4CBF0] rounded-[5px] border border-solid border-[#e0e0e0] hover:border-[#B4CBF0]`}
        >
          <Icon id="ChevronLeft" size={20} strokeWidth={3} />
        </a>
        <div class="flex items-center">
          {links?.map((item) => (
            <a
              class={`${
                pageInfo.currentPage === item.label
                  ? "bg-[#B4CBF0] text-white border-[#B4CBF0]"
                  : "bg-white text-[#B4CBF0] border-[#e0e0e0] hover:border-[#B4CBF0]"
              } ${
                item.show ? "flex" : "hidden"
              } w-8 h-8 border justify-center items-center mx-[5px] my-0 rounded-[5px] border-solid text-sm font-normal leading-6`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          aria-label="next page link"
          rel="next"
          href={pageInfo.nextPage ?? "#"}
          class="ml-1 flex items-center justify-center text-[#B4CBF0] w-8 h-8 hover:bg-white rounded-[5px] border border-solid border-[#e00e0e0] hover:border-[#B4CBF0]"
        >
          <Icon id="ChevronRight" size={24} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
