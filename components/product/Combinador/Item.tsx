import { useRef } from "preact/hooks";

import { useUI } from "$store/sdk/useUI.ts";

export interface Props {
  image: string;
  price: number;
  productId: string;
  skuId: string;
  stock: number;
}

export default function Item({ sku }: { sku: Props }, index: number) {
  const { skusCombination } = useUI();
  console.log("item", sku);

  const remove = (id: string) => {
    if (!id) return;

    const getList: any | null = localStorage.getItem("combinador");
    const listIds = JSON.parse(getList);
    localStorage.setItem("combinador", "[]");
    console.log("id", id);
    console.log("currentList", listIds);

    const newList = listIds.filter((item: string) => item != id);

    console.log("newList", newList);

    localStorage.setItem("combinador", JSON.stringify(newList));

    skusCombination.value = newList;
  };

  const dragItem = useRef<number>(0);
  const draggedItemOver = useRef<number>(0);

  const handleSort = () => {
    const itemClone = [...sku];
    const temp = itemClone[dragItem.current];
    itemClone[dragItem.current] = itemClone[draggedItemOver.current];
    itemClone[draggedItemOver.current] = temp;
  };

  return (
    <div
      draggable
      onDragStart={() => dragItem.current = index}
      onDragEnter={() => dragItemOver.current = index}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      class="w-[18%] flex items-center flex-col border relative mr-[2%] mb-[15px] p-[3px] border-solid border-[#ebebeb]"
    >
      <div
        onClick={() => remove(sku.productId)}
        class="apply w-4 h-4 flex items-center justify-center cursor-pointer bg-white text-base font-medium absolute right-2 top-2 rounded-[50%]"
      >
        x
      </div>
      <img
        width={170}
        height={170}
        src={sku.image}
        alt="produto do combinador"
      />
      <div class="text-sm font-semibold tracking-[0px] text-[#171413] px-2.5 py-0">
        {(sku.price / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}
