import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface benefitsItem {
  image: LiveImage;
  /** @format html */
  texto: string;
}

export default function Benefits({ content }: {
  content?: { items?: benefitsItem[] };
}) {
  return (
    <div class="w-full flex justify-center bg-white border-t border-b border-[#ebebeb]">
      {content && content.items && content.items.length > 0 && (
        <ul class="flex justify-center items-center">
          {content.items.map((item) => {
            return (
              <li class="px-5 pt-9 pb-6 flex justify-center items-center flex-col border-r border-[#ebebeb] max-md:hidden">
                {item?.image &&
                  (
                    <div class="mb-7 w-[74px] h-[74px] bg-[#f5f5f5] rounded-full flex items-center justify-center">
                      <img
                        loading="lazy"
                        width={30}
                        src={item?.image}
                        alt=""
                      />
                    </div>
                  )}
                {item?.texto &&
                  (
                    <p
                      class="max-w-[278px] px-5 text-center text-[#333] text-sm"
                      dangerouslySetInnerHTML={{ __html: item.texto }}
                    >
                    </p>
                  )}
              </li>
            );
          })}
          <li class="flex flex-col md:max-w-[280px] md:pl-3 max-md:p-6">
            <div class="flex items-center">
              <div class="mr-5 min-w-[74px] h-[74px] bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <img
                  loading="lazy"
                  width={18}
                  src="https://tfcszo.vteximg.com.br/arquivos/Question@2x.png?v=637966970345700000"
                  alt=""
                />
              </div>
              <div>
                <p class="text-sm">
                  <strong>Ainda em dúvida?</strong>
                </p>
                <p class="text-sm">
                  Envie sua pergunta pelo nosso formulário de contato
                </p>
              </div>
            </div>
            <a
              href="/Institucional/contato"
              class="block mt-7 border rounded-md text-center px-7 py-2 text-xs hover:bg-[#f5f5f5] hover:text-[#23527c] hover:underline"
            >
              Clique aqui para enviar sua dúvida
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
