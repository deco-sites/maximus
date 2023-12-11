import { useEffect, useState } from "preact/hooks";
import { Runtime } from "$store/runtime.ts";

function ColorsSimilars({query, url, isMeter}: any) {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    //console.log("query", query)
    get();
  }, [query]);
  
  const get = async () => {
  const data = await Runtime.invoke({
    key: "deco-sites/std/loaders/vtex/legacy/productList.ts",
    props: { fq: [query], count: 50 },
  });

  if (!data?.length) return;

  const newProducts = data?.map((item: any) => (
    {
      "image": item.image[0].url,
      "link": item.url,     
      "name": item.name     
    }
  ));

  setProducts(newProducts);
}

  return (
    <div class="md:mt-56 md:mb-5">
      <p class="text-[13px] font-medium leading-[19px] tracking-[0] text-[#171413] mb-3">
        <strong>Outras cores disponíveis</strong>
      </p>
      <div
        class={`flex flex-wrap w-full md:min-w-[770px] max-w-full ${
          seeMore ? "max-h-[1000px]" : "max-h-[142px]"
        } mt-[15px] mb-5 mx-0 overflow-hidden transition-[0.4s] `}
      >
        {products &&
          products?.map((item: any) => (
            <div class="bg-[#ccc] w-16 h-16 mr-2 mb-2">
              <a href={item.link}>
                <img
                  loading="lazy"
                  width={64}
                  height={64}
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                />
              </a>
            </div>
          ))}
      </div>
      {seeMore ? <div class="w-full md:min-w-[770px] max-w-full mb-4 flex items-center justify-center"><a class="w-[100%] md:w-[220px] h-[40px] max-md:mt-3 bg-[#171413] flex items-center justify-center text-base text-white" href={`/${url}`}>ver tudo</a></div> : <></>}
      <div
        class={`text-[13px] font-medium leading-[19px] tracking-[0] text-[#171413] cursor-pointer flex items-center whitespace-nowrap after:content-[''] after:w-[15px] after:h-[15px] after:bg-[url(/arquivos/seta.png)] after:flex after:bg-contain after:bg-no-repeat after:justify-center after:bg-center after:items-center after:ml-[5px] ${
          seeMore ? "after:rotate-[180deg]" : "after:rotate-[360deg]"
        }`}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? `Ver menos ${isMeter ? 'cores' : 'opções'} disponíveis` : `Ver mais ${isMeter ? 'cores' : 'opções'} disponíveis`}
      </div>
    </div>
  );
}

export default ColorsSimilars;
