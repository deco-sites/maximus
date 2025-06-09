import Image from "apps/website/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface sociaisItem {
  image: LiveImage;
  link: string;
  size: number;
}

export default function Sociais({ content }: {
  content?: { items?: sociaisItem[] };
}) {
  return (
    <div class="w-full max-w-[1236px] m-auto flex justify-between items-center bg-white max-md:pt-9 md:pt-7 pb-7 max-md:flex-col">
      <div class="w-70 flex items-center max-md:flex-col">
        <a href="/" class="block md:mr-7">
          <Image
            src="https://tfcszo.vteximg.com.br/arquivos/icon-maximus-social.svg?v=637966974692800000"
            alt="logo"
            title="logo"
            width={54}
            height={39}
            loading="lazy"
          />
        </a>
        {content && content.items && content.items.length > 0 && (
          <ul class="flex justify-center items-center max-md:my-9">
            {content.items.map((item) => {
              return (
                <li>
                  {item?.image &&
                    (
                      <a href={item?.link} class="block mx-5">
                        <Image
                          src={item?.image}
                          alt="social"
                          title="social"
                          width={item?.size}
                          loading="lazy"
                        />
                      </a>
                    )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div class="w-30 flex flex-wrap max-md:flex-col items-center">
        <div class="flex items-center mr-9 max-md:mb-5">
          <p class="text-xs text-[#999] mr-3">Desenvolvido por</p>
          <a href="https://www.agencia2bdigital.com.br/" target="_blank">
            <Image
              src="https://tfcszo.vteximg.com.br/arquivos/2bdigital_black.svg"
              alt="vtex"
              title="vtex"
              width={70}
              height={20}
              loading="lazy"
            />
          </a>
        </div>
        <div class="flex items-center">
          <p class="text-xs text-[#999] mr-4">Plataforma</p>
          <a href="https://vtex.com/br-pt/" target="_blank">
            <Image
              src="https://tfcszo.vteximg.com.br/arquivos/icon-vtex-benefits.svg"
              alt="2b"
              title="2b"
              width={54}
              height={24}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
