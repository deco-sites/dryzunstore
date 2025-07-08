import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnLoad } from "../../components/Analytics.tsx";
import { useId } from "../../sdk/useId.ts";

export interface Props {
  name: string;
  product: any;
  breadcrumbList: any;
  price: number;
  listPrice: number;
}

function SendProductEvent({
    name,
    product,
    breadcrumbList,
    price,
    listPrice,
}: Props) {
  const id = useId();

  const eventItem = mapProductToAnalyticsItem({
    product,
    breadcrumbList: breadcrumbList,
    price,
    listPrice,
  });
  
  if (!name || !product) {
    return null;
  }
  
  return (
    <SendEventOnLoad
      id={id}
      event={{
        name: "view_item",
        params: {
          item_list_id: "product",
          item_list_name: "Product",
          items: [eventItem],
        },
      }}
    />
  );
}

export default SendProductEvent;
