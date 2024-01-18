import { useState, useEffect } from "preact/hooks";

import { useUI } from "$store/sdk/useUI.ts";
import { formatPrice } from "$store/sdk/format.ts";

import MeterHelp from "$store/islands/MeterHelp.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem" | "platform"> {
  seller: string;
}

function AddToCartButton(props: Props) {
  const stock = props.stock;
  const name = props.name;
  const image = props.image;
  const isMeter = props.isMeter;
  const maxParcels = props.maxParcels;
  const quantityMin = isMeter ? 4 : 1;

  const [quantity, setQuantity] = useState(isMeter ? 10 : 1);
  const [notification, setNotification] = useState(false);
  const [showBuy, setShowBuy] = useState(false);

  const { quantityPdp } = useUI();
  quantityPdp.value = quantity;

  const { addItems } = useCart();

  //console.log("isMeter", isMeter);

  const onAddItem = () =>
    addItems({
      orderItems: [{
        id: props.productID,
        seller: props.seller,
        quantity: quantity,
      }],
    });

  const handleNotification = () => {
    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 5000);
  };

  const updateQuantity = (type: string) => {
    if (type === "minus") {
      if ((quantity - 1) > quantityMin) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(quantityMin);

        if ((quantity - 1) < quantityMin) {
          handleNotification();
        }
      }
    } else if (type === "plus") {
      if ((quantity + 1) <= stock) {
        setQuantity(quantity + 1);
      } else {
        setQuantity(stock);
      }
    }
  };
  useEffect(() => {
    const window_ = window;

    const handleScroll = function () {
      const scrollTop = window.scrollY;
  
      if (scrollTop > 600) {
        setShowBuy(true);
      } else {
        setShowBuy(false);
      }
    };
  
    window_.addEventListener("scroll", handleScroll);
    return () => window_.removeEventListener("scroll", handleScroll);
  });

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
      <div class="mt-[35px]">
        <Button onAddItem={onAddItem} {...props} />
      </div>
      {/* comprar fixo */}
      <div
        class={`w-screen max-md:flex-wrap ${
          showBuy ? "flex" : "hidden"
        } justify-center items-center bg-white fixed z-[9] py-3 px-5 md:py-5 border-t-[#eaeaea] border-t border-solid left-0 bottom-0`}
      >
        <div class="hidden md:flex items-center">
          <img
            width={60}
            height={60}
            src={image}
            alt={name}
            title={name}
            loading="lazy"
          />
          <h3 class="w-[235px] text-sm font-medium tracking-[0] text-[#171413] leading-[21px] ml-[25px] mr-[50px]">
            {name}
          </h3>
        </div>
        <div class="max-md:w-[45%] flex items-center md:mx-10">
          {isMeter && (
            <span class="hidden md:block text-sm font-medium leading-[19px] tracking-[0] text-[#171413] mr-5">
              Comprimento em <strong>metros</strong>
            </span>
          )}
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
        </div>
        <div class="max-md:w-[55%] md:mr-10">
          <span class="font-extrabold text-[22px] md:text-2xl tracking-[0] text-[#171413] leading-[26px]">
            {props.price &&
              formatPrice(
                (props.price * quantity) / (props.isMeter ? 10 : 1),
                props.offers!.priceCurrency!,
              )}
          </span>
          <span class="text-sm font-normal leading-6">
            {props.isMeter ? " /metro" : " /un"}
          </span>{" "}
          <br />
          <p class="hidden md:block text-xs font-semibold leading-[29px]">
            {maxParcels > 6 ? "13%" : "5%"} de desconto para pagamentos à vista
          </p>
        </div>
        <div class="max-md:w-full max-md:mt-3 flex items-center">
          <Button onAddItem={onAddItem} {...props} />
        </div>
      </div>
      {notification
        ? (
          <div class="w-full fixed z-[99] bottom-2 left-0 flex justify-center items-center">
            <div class="text-xs font-medium tracking-[0px] text-white border rounded px-6 py-4 flex justify-center items-center mb-5 border-solid border-[#e90000] bg-[#e90000]">
              {` A quantidade deve ser igual ou maior que ${
                isMeter ? "0.40 centímetro" : "1"
              }`}
            </div>
          </div>
        )
        : <></>}
    </>
  );
}

export default AddToCartButton;
