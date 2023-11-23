import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PaymentsItem {
  image: LiveImage;
  size: number;
}

export interface SecurityItem {
  image: LiveImage;
  link?: string;
  width: number;
  height: number;
}

export default function Payments({ payments, security }: {
  payments?: { items?: PaymentsItem[] };
  security?: { items?: SecurityItem[] };
}) {
  return (
    <div class="w-full bg-white pt-7 pb-7 border-t border-[#ebebeb]">
      <div class="max-w-[1236px] m-auto flex justify-between items-center max-md:flex-col max-md:items-start max-md:px-6">
        <div class="w-[35%] flex items-center max-md:flex-col max-md:items-start max-md:w-full">
          <p class="text-xs text-[#999] mr-4">Pagamentos:</p>
          {payments && payments.items && payments.items.length > 0 && (
            <ul class="flex justify-end items-center flex-wrap max-md:justify-start">
              {payments.items.map((item) => {
                return (
                  <li class="my-3 mr-7">
                    {item?.image &&
                      (
                        <Image
                          src={item?.image}
                          alt="social"
                          width={item?.size}
                          height={24}
                          loading="lazy"
                        />
                      )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div class="w-[60%] flex items-center max-md:flex-col max-md:items-start max-md:w-full">
          <p class="text-xs text-[#999] mr-4">Segurança:</p>
          {security && security.items && security.items.length > 0 && (
            <ul class="flex justify-center items-center max-md:flex-wrap max-md:justify-start">
              {security.items.map((item) => {
                return (
                  <li>
                    {item?.image &&
                      (
                        item?.link
                          ? (
                            <a href={item?.link} class="block mx-2 max-md:mb-5">
                              <Image
                                class="grayscale"
                                src={item?.image}
                                alt="social"
                                width={item?.width}
                                height={item?.height}
                                loading="lazy"
                              />
                            </a>
                          )
                          : (
                            <Image
                              class="grayscale"
                              src={item?.image}
                              alt="social"
                              width={item?.width}
                              height={item?.height}
                              loading="lazy"
                            />
                          )
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
