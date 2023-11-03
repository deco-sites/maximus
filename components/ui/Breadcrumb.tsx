import type { BreadcrumbList } from "apps/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div>
      <ul class="flex items-center justify-center">
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }) => (
            <li class="flex items-center after:content-[''] after:w-[3px] after:h-[3px] after:bg-[#222] after:mx-[9px] after:my-0 after:rounded-[50%]">
              <a
                class="font-roboto text-xs font-normal tracking-[0px] text-neutral-800 underline flex items-center"
                href={item}
              >
                {name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
