import { useEffect, useRef, useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "apps/vtex/hooks/useCart.ts";

export interface Props {
  image: string;
  price: number;
  productId: string;
  skuId: string;
  stock: number;
}

export default function List({ skus }: { skus: Props }) {
  const dragItem = useRef<number>(0);
  const draggedItemOver = useRef<number>(0);
  const { displayCombinador, displayCart } = useUI();
  const [products, setProducts] = useState<any>([]);
  const { addItems } = useCart();
  const { skusCombination } = useUI();

  const useAddToCart = () => {
    if (!products) return;

    const productsStock = products.filter((product: any) => product.stock > 9);
    const productsFormated = productsStock.map((product: any) => ({
      id: product.skuId,
      seller: "1",
      quantity: 10,
    }));

    addItems({
      orderItems: productsFormated,
    });

    displayCart.value = true;
  };

  useEffect(() => {
    setProducts(skus);
  }, [skus]);

  const remove = (id: string) => {
    if (!id) return;

    const getList: any | null = localStorage.getItem("combinador");
    const listIds = JSON.parse(getList);
    localStorage.setItem("combinador", "[]");

    const newList = listIds.filter((item: string) => item != id);
    localStorage.setItem("combinador", JSON.stringify(newList));
    skusCombination.value = newList;
  };

  const clearAll = () => {
    localStorage.setItem("combinador", "[]");
    skusCombination.value = [];
  };

  const handleSort = () => {
    const itemClone = [...products];
    const temp = itemClone[dragItem.current];
    itemClone[dragItem.current] = itemClone[draggedItemOver.current];
    itemClone[draggedItemOver.current] = temp;
    setProducts(itemClone);
  };

  return (
    <div class="p-4">
      <div
        onClick={() => displayCombinador.value = true}
        class="w-[49px] h-[49px] flex justify-center items-center bg-[#e4a886] shadow-[0px_3px_6px_#00000029] fixed z-[99] cursor-pointer transition-[0.3s] rounded-[25px] right-[50px] bottom-[15px] text-white after:content-['Combinador'] after:ml-[15px] after:text-[0px] hover:after:ml-[7px] hover:after:text-xs hover:w-[150px] after:font-semibold after:leading-[29px] after:tracking-[0.6px]"
      >
        <img
          width={25}
          height={25}
          class="ml-3"
          src="/arquivos/icon-combinador.svg"
          alt="regua"
          title="regua"
        />
        <span class="w-[25px] h-[25px] text-sm font-semibold tracking-[0px] text-white flex items-center justify-center bg-[#ef9492] absolute right-[-5px] top-[-5px] rounded-[25px]">
          {products?.length}
        </span>
      </div>

      <div
        class={`${
          displayCombinador.value ? "flex" : "hidden"
        } w-screen h-screen fixed z-[99] items-center justify-center left-0 top-0 bg-[#00000073]`}
      >
        <div
          onClick={() => displayCombinador.value = false}
          class="w-screen h-screen absolute left-0 top-0"
        >
        </div>
        <div class="w-[96%] md:w-[56%] h-[auto] absolute bg-white mx-auto py-[25px] md:px-[50px] rounded-sm left-[2%] md:left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
          <div
            style={{ backgroundImage: "url('/arquivos/close-modal.svg')" }}
            onClick={() => displayCombinador.value = false}
            class="absolute cursor-pointer z-[99999] w-6 h-6 bg-no-repeat bg-center appearance-none transition-[0.2s] duration-[ease-in-out] m-0 p-[7px] rounded-[50%] border-[none] scale-150 right-5 md:right-10 top-[15px];"
          >
          </div>
          <div class="block relative px-0 py-[22px] border-b-[#EBEBEB] border-b border-solid">
            <h3 class="flex justify-center items-center text-lg tracking-[0px] text-neutral-800 uppercase font-bold leading-[34px]">
              <img
                width={25}
                height={25}
                class="mr-3"
                src="/arquivos/icon-combinador-black.svg"
                alt={"icone combinador"}
                title="icone combinador"
              />COMBINADOR DE TECIDOS:
            </h3>
            <p class="text-sm font-medium tracking-[0px] text-neutral-800 text-center leading-6">
              Use essa ferramenta para combinar e comparar cores dos tecidos!
              <br />
              <small>*clique e arraste para mudar a posição dos tecidos</small>
            </p>
            <div class="py-6 flex flex-wrap items-center justify-start">
              {products && products?.map((sku: Props, index: number) => (
                <div
                  draggable
                  onDragStart={() => dragItem.current = index}
                  onDragEnter={() => draggedItemOver.current = index}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  class="w-[31%] md:w-[18%] flex items-center flex-col border relative mr-[2%] mb-[15px] p-[3px] border-solid border-[#ebebeb]"
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
                    alt={sku.name}
                    title={sku.name}
                  />
                  <div class="text-sm font-semibold tracking-[0px] text-[#171413] px-2.5 py-0">
                    {(sku.price / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {products.length
            ? (
              <div class="flex justify-end pt-6 max-md:flex-col max-md:items-center">
                <button
                  onClick={useAddToCart}
                  class="w-[347px] h-[54px] flex justify-center items-center bg-[#6eb212] hover:bg-[#86c92c] text-xs font-semibold tracking-[0.6px] text-white transition-[0.2s] md:mr-[35px] rounded-sm border-0"
                >
                  Adicionar todos à sacola
                </button>
                <button
                  onClick={clearAll}
                  class="max-md:mt-5 flex justify-center items-center text-xs font-semibold tracking-[0.6px] text-neutral-800 hover:text-[#D15252]"
                >
                  Remover tudo
                </button>
              </div>
            )
            : (
              <p class="text-sm font-medium tracking-[0px] text-neutral-800 text-center leading-6">
                Não encontramos nenhum produto!
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
