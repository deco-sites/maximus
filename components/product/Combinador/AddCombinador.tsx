import { useUI } from "$store/sdk/useUI.ts";

export default function Combinador({ sku }: { sku: string }) {
  const { displayCombinador, skusCombination } = useUI();

  const addCombinador = () => {
    displayCombinador.value = true;

    if (localStorage.getItem("combinador") == null) {
      localStorage.setItem("combinador", "[]");
    }

    const getStorage: any | null = localStorage.getItem("combinador");

    const listIds = JSON.parse(getStorage);

    let achou = false;
    listIds.filter((item: any) => {
      if (item == sku) {
        achou = true;
      }
    });

    if (achou) {
      console.log("ja existe");
      return;
    }

    listIds.push(sku);

    localStorage.setItem("combinador", JSON.stringify(listIds));
    skusCombination.value = listIds;
  };

  return (
    <div
      onClick={addCombinador}
      class="cursor-pointer max-w-full w-[347px] h-[43px] flex justify-center items-center hover:bg-[#f5f5f5] no-underline mt-6 text-xs font-semibold leading-[29px] tracking-[0.6px] text-[#171413]"
    >
      <img
        width={25}
        height={25}
        class="mr-3"
        src="/arquivos/icon-combinador-black.svg"
        alt="icone combinador"
      />Combinar tecido
    </div>
  );
}
