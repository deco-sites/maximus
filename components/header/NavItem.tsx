import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item, showLogo }: { item: INavItem; showLogo: boolean }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center text-white">
      <a href={`${href}`} class="px-6 py-3">
        <span class="text-sm uppercase">
          {label}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="fixed hidden hover:flex group-hover:flex flex-col bg-base-100 z-50 items-center justify-center gap-6 border-t border-b-2 border-base-200 w-screen"
            style={{
              top: "0px",
              left: "0px",
              marginTop: showLogo ? "159px" : headerHeight,
            }}
          >
            {image?.src && (
              <Image
                class="p-6"
                src={image.src}
                alt={image.alt}
                title={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}

            {/*<only desk>*/}
            <div class="w-full max-w-[1260px] pt-[40px] pb-[20px] border-b-[1px] border-[#ebebeb]">
              <span class="text-[#262626] text-[15px] font-semibold">
                {label}
              </span>
            </div>
            {/*</only desk>*/}

            <ul class="w-full max-w-[1260px] max-h-[250px] flex flex-col flex-wrap content-start">
              {children.map((node) => (
                <li class="py-1 pr-[90px]">
                  <a class=" hover:underline text-[#171413]" href={`${node.href}`}>
                    <span class="text-sm">{node.label}</span>
                  </a>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline" href={`${leaf.href}`}>
                          <span class="text-xs">{leaf.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/*<only desk>*/}
            <div class="w-full max-w-[1260px] pb-[20px]">
              <a href={`${href}`}>
                <span class="flex items-center uppercase text-[#171413] after:text-base after:scale-x-[2] after:content-['\0279E'] after:ml-5 hover:underline after:hover:no-underline-2">
                  Ver todos os produtos
                </span>
              </a>
            </div>
            {/*</only desk>*/}
          </div>
        )}
    </li>
  );
}

export default NavItem;
