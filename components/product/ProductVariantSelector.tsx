import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "apps/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product, product: { url } }: Props) {
  const possibilities = useVariantPossibilities(product);

  let current = "";
  Object.keys(possibilities).map((name) => {
   if(name === 'Largura do Tecido ou Tamanho') {
    Object.entries(possibilities[name]).map(([value, [link]]) => {
      if(link === url) {
        current = value
      }
      
    })
   }
}); 
  
const showVariation = possibilities['Largura do Tecido ou Tamanho'] ? Object.keys(possibilities['Largura do Tecido ou Tamanho']).length > 1 : false;

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class={`${showVariation && name === 'Largura do Tecido ou Tamanho' ? 'flex' : 'hidden'} flex-col gap-2`}>
          <span class="block text-sm font-semibold leading-[29px] mb-[5px]">{current}</span>
          <ul class="flex flex-row gap-2 flex-wrap">
            {Object.entries(possibilities[name]).map(([value, [link]]) => (
              <li>
                <a class={`w-max block rounded border bg-white cursor-pointer text-xs font-normal leading-6 transition-[0.2s] duration-[ease-in-out] mr-[9px] mb-[15px] px-[7px] py-[5px] border-solid ${link === url ? "border-[#333]" : "border-[#eaeaea]"} hover:border-[#333]`} href={link}>
                 {value}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
