import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";

interface Props {
  loading: boolean;
  currency: string;
  total: number;
  items: AnalyticsItem[];
}

function CartButton({ loading, currency, total, items }: Props) {
  const { displayCart } = useUI();
  const totalItems = items.length;

  const onClick = () => {
    sendEvent({
      name: "view_cart",
      params: { currency, value: total, items },
    });
    displayCart.value = true;
  };

  return (
    <div class="indicator">
      <Button
        class="btn-ghost text-white flex items-center px-0"
        aria-label="open cart"
        data-deco={displayCart.value && "open-cart"}
        loading={loading}
        onClick={onClick}
      >
        <Icon id="ShoppingCart" size={24} strokeWidth={2} />
        <div class="w-[25px] h-[25px] ml-[-6px] flex items-center justify-center border rounded border-[#e4a886] text-white font-light">
          {totalItems > 9 ? "9+" : totalItems}
        </div>
      </Button>
    </div>
  );
}

export default CartButton;
