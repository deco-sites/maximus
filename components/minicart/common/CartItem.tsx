import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useCallback, useState } from "preact/hooks";

export interface Item {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  quantity: number;
  price: {
    sale: number;
    list: number;
  };
}

export interface Props {
  item: Item;
  index: number;

  locale: string;
  currency: string;

  onUpdateQuantity: (quantity: number, index: number) => Promise<void>;
  itemToAnalyticsItem: (index: number) => AnalyticsItem | null | undefined;
}

function CartItem(
  {
    item,
    index,
    locale,
    currency,
    onUpdateQuantity,
    itemToAnalyticsItem,
  }: Props,
) {
  const { image, name, price: { sale, list }, quantity } = item;
  const isGift = sale < 0.01;
  const [loading, setLoading] = useState(false);

  //console.log("Item cart::", item);
  //console.log("Item image::", image);

  const withLoading = useCallback(
    <A,>(cb: (args: A) => Promise<void>) => async (e: A) => {
      try {
        setLoading(true);
        await cb(e);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <div
      class="grid grid-rows-1 gap-2"
      style={{
        gridTemplateColumns: "auto 1fr",
      }}
    >
      <Image
        src={image?.src.replace("55-55", "190-190")}
        alt={image?.alt}
        title={image?.alt}
        style={{ aspectRatio: "190 / 190" }}
        width={190}
        height={190}
        class="h-full object-contain"
      />

      <div class="flex gap-2">
        <div class="ml-20 w-[390px]">
          <div class="flex justify-between items-center">
            <span class="text-sm font-normal leading-6 w-full whitespace-normal overflow-hidden text-ellipsis pt-2.5">
              {name}
            </span>
          </div>
          <div class="flex items-center gap-2">
            {list !== (sale * 10) && (
              <span class="line-through text-base-300 text-sm">
                {formatPrice(list, currency, locale)}
              </span>
            )}

            <span class="text-[#171413] text-base font-semibold text-shadow leading-[29px]">
              {isGift
                ? "Grátis"
                : formatPrice(sale * quantity, currency, locale)}
            </span>
          </div>
        </div>
        <div class="w-[100px]">
          <Button
            disabled={loading || isGift}
            loading={loading}
            class="btn-ghost btn-square text-[#171413] text-sm font-normal leading-6 w-full h-full hover:underline hover:text-[#ef9492] hover:bg-transparent"
            onClick={withLoading(async () => {
              const analyticsItem = itemToAnalyticsItem(index);

              await onUpdateQuantity(0, index);

              analyticsItem && sendEvent({
                name: "remove_from_cart",
                params: { items: [analyticsItem] },
              });
            })}
          >
            excluir
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
