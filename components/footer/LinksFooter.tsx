export interface link {
  link: string;
  text: string;
}

export interface linkItem {
  title: string;
  items: link[];
}

export default function LinksFooter(
  { content }: { content: linkItem[] },
) {
  return (
    <div class="w-full bg-white max-md:pt-1 max-md:pb-2 md:pt-9 md:pb-6 border-b border-[#ebebeb]">
      {content && content.length > 0 && (
        <div class="max-w-[1236px] m-auto flex items-start justify-between max-md:flex-col">
          {content.map((section) => {
            return (
              <div class="max-md:collapse collapse-plus max-md:mt-2 max-md:border-b border-[#ebebeb] last:border-b-0 max-md:rounded-none">
                <input class="md:hidden" type="checkbox" />
                <div class="max-md:collapse-title text-sm text-[#000] font-semibold after:text-lg md:mb-2">
                  {section.title}
                </div>

                <div class="collapse-content md:visible md:px-0">
                  <ul class="text-[#171413] text-xs max-h-[206px] flex flex-wrap flex-col">
                    {section && section.items.map((subItem) => {
                      return (
                        <li>
                          <a class="block py-2 md:mr-8" href={subItem.link}>
                            {subItem.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          <div class="max-md:collapse max-md:collapse-plus">
            <input class="md:hidden" type="checkbox" />
            <div class="max-md:collapse-title text-sm text-[#000] font-semibold after:text-lg mb-2">
              Atendimento
            </div>

            <div class="collapse-content md:visible md:px-0">
              <ul class="text-[#171413] text-xs md:max-w-[252px] max-h-[206px] flex flex-wrap flex-col">
                <li class="flex items-start py-2 mb-2 border-b border-[#ebebeb] flex-wrap">
                  <img
                    src="https://tfcszo.vteximg.com.br/arquivos/clockicon.png"
                    width={14}
                    height={14}
                    alt="icone horario"
                    title="icone horario"
                    loading="lazy"
                    class="block mr-3"
                  />
                  <p class="mb-[5px]">De segunda a sexta</p>
                  <p class="w-full ml-[10%] my-[5px] max-md:ml-[25px]">
                    das 09:00 às 18:00 horas
                  </p>
                  <p class="w-full ml-[10%] my-[5px] max-md:ml-[25px]">
                    Sábado
                  </p>
                  <p class="w-full ml-[10%] my-[5px] max-md:ml-[25px]">
                    das 09:00 às 12:30 horas
                  </p>
                </li>
                <li class="flex items-start py-2">
                  <img
                    src="https://tfcszo.vteximg.com.br/arquivos/telicon.png"
                    width={14}
                    height={14}
                    alt="icone atendimento"
                    title="icone atendimento"
                    loading="lazy"
                    class="block mr-3"
                  />
                  SAC Loja virtual -{" "}
                  <a href="tel:+5545302201345">
                    (45) 3020-1345
                  </a>
                </li>
                <li class="flex items-start py-2">
                  <img
                    src="https://tfcszo.vteximg.com.br/arquivos/whtasicon.png"
                    width={14}
                    height={14}
                    alt="icone whatsapp"
                    title="icone whatsapp"
                    loading="lazy"
                    class="block mr-3"
                  />
                  WhatsApp -{" "}
                  <a href="https://api.whatsapp.com/send?phone=5545999110056">
                    (45) 99911-0056
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
