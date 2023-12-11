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
    <div class="w-full block md:hidden border-b border-[#ebebeb]">
      {content && content.items && content.items.length > 0 && (
        <ul class="flex flex-wrap justify-center items-center">
          {content.items.map((item) => {
            return (
              <li class="w-[48%] p-3 flex justify-center items-start">
                {item?.image &&
                  (                   
                      <img
                        loading="lazy"
                        width={24}
                        height={24}
                        src={item?.image}
                        alt={item?.texto}
                        title="Item de beneficios"
                      />
                  )}
                {item?.texto &&
                  (
                    <p
                      class="max-w-[278px] px-3 tracking-[0px] text-neutral-800 text-[10px]"
                      dangerouslySetInnerHTML={{ __html: item.texto }}
                    >
                    </p>
                  )}
              </li>
            );
          })}          
        </ul>
      )}
    </div>
  );
}
