import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import CartItem, { Item, Props as ItemProps } from "./CartItem.tsx";
import Coupon, { Props as CouponProps } from "./Coupon.tsx";
import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";

interface Props {
  items: Item[];
  loading: boolean;
  total: number;
  subtotal: number;
  discounts: number;
  locale: string;
  currency: string;
  coupon?: string;
  freeShippingTarget: number;
  onAddCoupon: CouponProps["onAddCoupon"];
  onUpdateQuantity: ItemProps["onUpdateQuantity"];
  itemToAnalyticsItem: ItemProps["itemToAnalyticsItem"];
}

function Cart({
  items,
  total,
  subtotal,
  locale,
  coupon,
  loading,
  currency,
  discounts,
  freeShippingTarget,
  itemToAnalyticsItem,
  onUpdateQuantity,
  onAddCoupon,
}: Props) {
  const { displayCart } = useUI();
  const isEmtpy = items.length === 0;

  return (
    <div class="flex flex-col justify-center items-center overflow-hidden w-[100vw] md:w-[840px]">
      {isEmtpy
        ? (
          <div class="flex flex-col gap-6">
            <span class="text-base font-semibold leading-[29px]">
              No momento, não há produtos adicionados no carrinho.
            </span>
          </div>
        )
        : (
          <>
            {/* Free Shipping Bar */}
            <div class="hidden px-2 py-4 w-full">
              <FreeShippingProgressBar
                total={total}
                locale={locale}
                currency={currency}
                target={freeShippingTarget}
              />
            </div>

            {/* Cart Items */}
            <ul
              role="list"
              class="mt-6 px-6 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
            >
              {items.map((item, index) => (
                <li key={index}>
                  <CartItem
                    item={item}
                    index={index}
                    locale={locale}
                    currency={currency}
                    onUpdateQuantity={onUpdateQuantity}
                    itemToAnalyticsItem={itemToAnalyticsItem}
                  />
                </li>
              ))}
            </ul>

            {/* Cart Footer */}
            <footer class="w-full">
              {/* Subtotal */}
              <div class="border-t border-base-200 py-2 hidden flex-col">
                {discounts > 0 && (
                  <div class="flex justify-between items-center px-4">
                    <span class="text-sm">Descontos</span>
                    <span class="text-sm">
                      {formatPrice(discounts, currency, locale)}
                    </span>
                  </div>
                )}
                <div class="w-full flex justify-between px-4 text-sm">
                  <span class="text-sm font-normal leading-6 w-full whitespace-normal overflow-hidden text-ellipsis pt-2.5">
                    Subtotal
                  </span>
                  <span class="px-4 text-base font-semibold text-shadow leading-[29px]">
                    {formatPrice(subtotal, currency, locale)}
                  </span>
                </div>
                <Coupon onAddCoupon={onAddCoupon} coupon={coupon} />
              </div>

              {/* Total */}
              <div class="border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-6">
                <div class="flex justify-between items-center w-full">
                  <span>Subtotal</span>
                  <span class="font-medium text-xl">
                    {formatPrice(subtotal, currency, locale)}
                  </span>
                </div>
                <span class="hidden text-sm text-base-300">
                  Taxas e fretes serão calculados no checkout
                </span>
              </div>

              <div class="py-4 px-6">
                <a class="inline-block w-full" href="/checkout">
                  <Button
                    data-deco="buy-button"
                    class="flex items-center justify-start w-full h-12 text-base font-semibold leading-[19px] text-white transition-[0.2s] duration-[ease-in-out] rounded-none border px-5 border-solid border-[#171413] bg-[#171413] hover:bg-white hover:text-[#171413] after:content-['\0279E'] after:text-white after:ml-2 after:block after:scale-x-[2] hover:after:text-[#171413]"
                    disabled={loading || isEmtpy}
                    onClick={() => {
                      sendEvent({
                        name: "begin_checkout",
                        params: {
                          coupon,
                          currency,
                          value: total - discounts,
                          items: items
                            .map((_, index) => itemToAnalyticsItem(index))
                            .filter((x): x is AnalyticsItem =>
                              Boolean(x)
                            ),
                        },
                      });
                    }}
                  >
                    Finalizar compra
                  </Button>
                </a>
              </div>
            </footer>
          </>
        )}
    </div>
  );
}

export default Cart;
