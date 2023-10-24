import { useState } from "preact/hooks";

import MeterHelp from "$store/islands/MeterHelp.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem" | "platform"> {
  seller: string;
}

function AddToCartButton(props: Props) {
  const stock = props.stock;
  const isMeter = props.isMeter;
  const quantityMin = isMeter ? 4 : 1;

  const [quantity, setQuantity] = useState(isMeter ? 10 : 1);
  const { addItems } = useCart();

  console.log("isMeter", isMeter);

  const onAddItem = () =>
    addItems({
      orderItems: [{
        id: props.productID,
        seller: props.seller,
        quantity: quantity,
      }],
    });

  const updateQuantity = (type: string) => {
    if (type === "minus") {
      if ((quantity - 1) > quantityMin) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(quantityMin);
      }
    } else if (type === "plus") {
      if ((quantity + 1) <= stock) {
        setQuantity(quantity + 1);
      } else {
        setQuantity(stock);
      }
    }
  };

  return (
    <>
      {isMeter && (
        <p class="text-sm font-medium leading-[19px] tracking-[0] text-[#171413] mb-2.5">
          Comprimento em <strong>metros</strong>
        </p>
      )}

      <div class="flex items-center justify-between">
        <div class="w-[126px] h-12 bg-white border flex justify-around items-center border-solid border-[#eaeaea]">
          <span
            class="cursor-pointer block text-[#171413] text-base relative right-[-5px] top-px"
            onClick={() => updateQuantity("minus")}
          >
            -
          </span>
          <span class="cursor-default">
            {isMeter ? (quantity * .1).toFixed(2) : quantity}
          </span>
          <span
            class="cursor-pointer block text-[#171413] text-base relative left-[-5px] top-0.5"
            onClick={() => updateQuantity("plus")}
          >
            +
          </span>
        </div>

        {isMeter && <MeterHelp />}
      </div>
      <Button onAddItem={onAddItem} {...props} />
    </>
  );
}

export default AddToCartButton;
