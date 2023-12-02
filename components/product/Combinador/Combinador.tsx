import { useEffect, useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";
import { Runtime } from "$store/runtime.ts";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useCallback } from "preact/hooks";

import List from "$store/islands/CombinationList.tsx";

export default function Combinador() {
  const { displayCombinador, skusCombination } = useUI();
  const [products, setProducts] = useState<any>([]);

  //const query = "skuId:100021460,skuId:100021385,skuId:100021307";

  const get = async () => {
    const listStorage: any | null = localStorage.getItem("combinador");

    const listFq = JSON.parse(listStorage)?.map((id: any) => `productId:${id}`); 

    if (!listFq?.length) {
      setProducts([]);
      return;
    }

    const data = await Runtime.invoke({
      key: "deco-sites/std/loaders/vtex/legacy/productList.ts",
      props: { fq: listFq, count: listFq.length },
    });

    if (!data?.length) return;

    const productsF = data?.map((item: any) => (
      {
        "image": item.image[0].url,
        "name": item.name,
        "skuId": item.sku,
        "productId": item.inProductGroupWithID,
        "stock": item.offers?.offers[0]?.inventoryLevel.value,
        "price": item.offers?.highPrice * 100,
      }
    ));

    setProducts(productsF);
  };

  useEffect(() => {
    get();
  }, [displayCombinador.value]);

  useEffect(() => {
    get();
  }, [skusCombination.value]);

  return (
    <div class="p-4">
      <List skus={products} />
    </div>
  );
}
