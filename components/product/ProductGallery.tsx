import { Product } from "apps/commerce/types.ts";

import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";

export interface Columns {
  mobile?: number;
  desktop?: number;
}

export interface Props {
  products: Product[] | null;
  layout?: cardLayout;
}

function ProductGallery({ products, layout }: Props) {
  return (
   <>
    {products?.length >0 ?
      <div class="grid grid-cols-2 gap-2 items-center sm:grid-cols-3 sm:gap-10 ml-0 md:ml-10">
      {products?.map((product, index) => (
        <ProductCard product={product} preload={index === 0} layout={layout} />
      ))}
    </div>
    :
 <div class="w-full md:mt-[-100px]">
    <p class="text-2xl font-bold text-center text-[#686868] mb-6">Não encontramos nenhum item :( </p>
    <p class="text-center text-[#333] text-sm">Mas espere, temos muitos produtos que você pode gostar!</p>
    <p class="text-center text-[#333] text-sm">Confira a nossa seção de novidades:</p>
    <a href="/novidades" class="w-[240px] h-[40px] flex items-center justify-center mr-auto ml-auto mt-4 mb-7 bg-[#171413] text-white border border-[#171413] hover:bg-white hover:text-[#171413] after:text-base after:scale-x-[2] after:content-['\0279E'] after:ml-5">ir para as novidades</a>
 </div>
  }   
   </> 
  );
}

export default ProductGallery;
