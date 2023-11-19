import { Runtime } from "$store/runtime.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useCallback } from "preact/hooks";

import List from "$store/islands/CombinationList.tsx";

export default function Combinador() {
  if (!IS_BROWSER) {
    return <></>;
  }

  const query = "fq=skuId:100021460&fq=skuId:100021385&fq=skuId:100021307";

  const fetchData = useCallback(async () => {
    const data = await Runtime.invoke["deco-sites/maximus"].loaders.combination
      .getProducts({ query });

    console.log("data1", data);
  }, []);

  fetchData();

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
      <List skus={skus} />
    </div>
  );
}
