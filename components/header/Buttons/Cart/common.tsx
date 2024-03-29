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
        class="max-md:hidden btn-ghost text-white flex items-center px-0 hover:bg-[#171413]"
        aria-label="open cart"
        data-deco={displayCart.value && "open-cart"}
        loading={loading}
        onClick={onClick}
      >
        <img
          src="/arquivos/icon-cart-2.svg"
          alt="icone cart"
          title="icone card"
        />
        <div class="w-[25px] h-[25px] max-md:ml-[-6px] flex items-center justify-center border rounded border-[#e4a886] text-white font-light">
          {totalItems > 9 ? "9+" : totalItems}
        </div>
      </Button>
      <a
        class="flex items-center justify-between w-[48px] md:hidden"
        href="/checkout"
      >
        <img
          src="/arquivos/icon-cart-2.svg"
          alt="icone cart"
          title="icone card"
        />
        <div class="w-[25px] h-[25px] max-md:ml-[-6px] flex items-center justify-center border rounded border-[#e4a886] text-white font-light">
          {totalItems > 9 ? "9+" : totalItems}
        </div>
      </a>
    </div>
  );
}

export default CartButton;
