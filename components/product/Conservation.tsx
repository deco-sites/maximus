import { useState } from "preact/hooks";

function Conservation({ conservationsList }: { conservationsList: any }) {
  const [show, setShow] = useState<boolean>(false);

  const buildImage = (prefix: string, img: string) => {
    if (!img) return;

    const srcMounted = `https://tfcszo.vteximg.com.br/arquivos/conservacao-${
      rewrite(prefix)
    }-${rewrite(img)}.svg`;

    return srcMounted || "";
  };

  const rewrite = (str: string) => {
    if (str) {
      str = str
        .toLowerCase()
        .trim()
        .replace(/[áàãâä]/g, "a")
        .replace(/[éèẽêë]/g, "e")
        .replace(/[íìĩîï]/g, "i")
        .replace(/[óòõôö]/g, "o")
        .replace(/[úùũûü]/g, "u")
        .replace(/ç/g, "c")
        .replace(/( |_)+/, " ")
        .replace(/(^-+|-+$)/, "")
        .replace(/[ ]/g, "-");
    }

    return str;
  };

  return (
    <div>
      <p class="text-[13px] leading-4 tracking-[0] text-[#171413] mb-3">
        <strong>Conservação</strong>
        <br />
      </p>
      <div class="flex items-center">
        {conservationsList.length > 0 &&
          conservationsList?.map((item: any) => (
            <div class="mb-5 mr-2">
              <img
                src={buildImage(item.name, item.value)}
                alt={item.value}
                title={item.value}
              />
            </div>
          ))}
      </div>
      <div
        onClick={() => setShow(true)}
        class="w-[178px] h-[35px] border text-[#171413] text-xs font-medium leading-[19px] tracking-[0] flex items-center justify-center cursor-pointer no-underline border-solid border-[#171413] hover:underline"
      >
        <img
          class="mr-3"
          src="/arquivos/icon-composition.png"
          alt="icone composicao"
          title="icone composicao"
        />
        Tabela de conservação
      </div>

      <div
        class={`${
          show ? "flex" : "hidden"
        } w-screen h-screen fixed z-[99] items-center justify-center left-0 top-0 bg-[#00000073]`}
      >
        <div
          onClick={() => setShow(false)}
          class="w-screen h-screen absolute left-0 top-0"
        >
        </div>
        <div class="w-[96%] md:w-[56%] h-[90vh] absolute bg-white mx-auto py-[50px] md:px-[50px] rounded-sm left-[2%] md:left-[22%] top-[30px] overflow-y-scroll max-h-full scrollbar-thumb scrollbar scrollbar-track">
          <div
            style={{ backgroundImage: "url('/arquivos/close-modal.svg')" }}
            onClick={() => setShow(false)}
            class="absolute cursor-pointer z-[99999] w-6 h-6 bg-no-repeat bg-center appearance-none transition-[0.2s] duration-[ease-in-out] m-0 p-[7px] rounded-[50%] border-[none] scale-150 right-5 md:right-10 top-[15px];"
          >
          </div>
          <img
            src="https://tfcszo.vteximg.com.br/arquivos/tabela-conservacao-desk.png"
            alt="tabela de conservaçao"
            title="tabela de conservaçao"
          />
        </div>
      </div>
    </div>
  );
}

export default Conservation;
