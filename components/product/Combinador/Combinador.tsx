import { useEffect, useState } from "preact/hooks";

import { Runtime } from "$store/runtime.ts";
//import { IS_BROWSER } from "$fresh/runtime.ts";
//import { useCallback } from "preact/hooks";

import List from "$store/islands/CombinationList.tsx";

export default function Combinador() {
const [products, setProducts] = useState<any>([])

  const query = "skuId:100021460,skuId:100021385,skuId:100021307";

  useEffect(() => {
    const get = async () => {
      const data = await Runtime.invoke({
        key: "deco-sites/std/loaders/vtex/legacy/productList.ts",
        props: { fq: query, count: 5 },
      });

      if (!data?.length) return;
      console.log("DATA::", data);
      const productsF = data?.map(((item:any)=>(
        {
          "image": item.image[0].url,
          "skuId": item.sku,
          "stock": item.offers?.offers[0]?.availability,
          "price": item.offers?.highPrice,
        }
      )));

      setProducts(productsF);
    };
    get();
  }, []);

  /* data teste */
  const skus: any = [
    {
      image:
        "https://tfcszo.vteximg.com.br//arquivos/ids/184123-180-auto/4527-TECIDO-POLIESTER-COM-TEXTURA-DE-LINHO-VERDE-BANDEIRA--1-.jpg?v=638326318956800000",
      price: 3900,
      skuId: "100021460",
      stock: 6,
    },
    {
      image:
        "https://tfcszo.vteximg.com.br//arquivos/ids/184523-180-auto/4767-TECIDO-VELUDO-BORDADO-FLORAL--1-.jpg?v=638334091400670000",
      price: 35900,
      skuId: "100021385",
      stock: 12,
    },
    {
      image:
        "https://tfcszo.vteximg.com.br//arquivos/ids/184662-180-auto/4426-TECIDO-LINHO-MISTO-CRU-ESTAMPADO-XADREZ-VERDE--1-.jpg?v=638334887484430000",
      price: 7300,
      skuId: "9293",
      stock: 645454,
    },
  ];

  return (
    <div class="p-4">
      <List skus={products} />
    </div>
  );
}
