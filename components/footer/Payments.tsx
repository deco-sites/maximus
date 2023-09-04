import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PaymentsItem {
  image: LiveImage;
  size: number;
}

export interface SecurityItem {
  image: LiveImage;
  link: string;
  size: number;
}

export default function Payments({ payments, security }: {
  payments?: { items?: PaymentsItem[] };
  security?: { items?: SecurityItem[] };
}) {
  return (
    <div class="w-full bg-white pt-9 pb-6 border-t border-[#ebebeb]">
      <div class="max-w-[1236px] m-auto flex justify-between items-center">
        <div class="w-[35%] flex items-center">
          <p class="text-xs text-[#999] mr-4">Pagamentos:</p>
          {payments && payments.items && payments.items.length > 0 && (
            <ul class="flex justify-end items-center flex-wrap">
              {payments.items.map((item) => {
                return (
                  <li class="my-3 mr-7">
                    {item?.image &&
                      (
                        <Image
                          src={item?.image}
                          alt="social"
                          width={item?.size}
                          loading="lazy"
                        />
                      )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div class="w-[60%] flex items-center">
          <p class="text-xs text-[#999] mr-4">Segurança:</p>
          {security && security.items && security.items.length > 0 && (
            <ul class="flex justify-center items-center">
              {security.items.map((item) => {
                return (
                  <li>
                    {item?.image &&
                      (
                        <a href={item?.link} class="block mx-2">
                          <Image
                            class="grayscale"
                            src={item?.image}
                            alt="social"
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
      </div>
    </div>
  );
}
