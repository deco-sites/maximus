import { formatPrice } from "$store/sdk/format.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  price: number;
  listPrice: any;
  installments: any;
  offers: any;
  isMeter: boolean;
  maxParcels: number;
  product: {
    brand: {
        name: string
    }
  }
}

function Price(
  { price, listPrice, installments, offers, isMeter, product, maxParcels }: Props,
  {},
) {
  const { quantityPdp } = useUI();
  
  const [discount, setDiscount] = useState<string>("");

  useEffect(() => {
    const brandName = product.brand.name;

    switch (true) {
        case brandName.includes("DRAFT"):
            setDiscount("3%");
            break;
        case brandName.includes("SINGER"):
            setDiscount("10%");
            break;
        default:
            setDiscount("5%");
            break;
    }
    
  }, []);	
  
  
  return (
    <div class="mt-4">
      {listPrice !== price && (
        <div class="flex flex-row gap-2 items-center">
          <span class="text-[13px] font-normal tracking-[0] text-[#bababa] leading-4 line-through mb-2">
            De: {formatPrice(
              (listPrice * quantityPdp.value) / (isMeter ? 10 : 1),
              offers!.priceCurrency!,
            )}
          </span>
          <span class="text-[13px] font-normal tracking-[0] text-[#161413] leading-4 ml-5 mb-2">
            Economize {listPrice &&
              formatPrice(listPrice - price, offers!.priceCurrency!)}
          </span>
        </div>
      )}
      <div>
        <span class="font-extrabold text-2xl tracking-[0] text-[#171413] leading-[26px] mb-2">
          {listPrice !== price && "Por:"} {formatPrice(
            (price * quantityPdp.value) / (isMeter ? 10 : 1),
            offers!.priceCurrency!,
          )}
          
          {isMeter && (
            <small class="text-sm font-normal leading-6">/metro</small>
          )}
        </span>
      </div>
      <div>
        {installments &&
          (
            <span class="text-sm font-normal tracking-[0] text-[#171413] leading-4 flex flex-col my-2.5">
              {installments}
            </span>
          )}

        <p class="block text-xs font-semibold leading-[29px] mb-[15px]">
          {discount} de desconto para pagamentos à vista
        </p>
      </div>
    </div>
  );
}

export default Price;
