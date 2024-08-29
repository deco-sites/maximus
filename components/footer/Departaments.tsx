export interface footerItemsI {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}
export default function Departaments({ content }: {
  content?: footerItemsI[];
}) {
  return (
    <div class="w-full py-9 bg-white border-b border-t border-[#EBEBEB]">
      <div class="max-w-[1236px] m-auto">
        <h4 class="uppercase text-md font-bold text-center mb-5">
          departamentos
        </h4>
        <ul class="flex justify-center md:justify-between max-md:flex-col">
  {content &&
    content.map((item, index) => {
      return (
        <li class={`${index === 0 ? "flex flex-wrap" : ""} max-md:collapse max-md:collapse-plus max-md:border-t border-[#EBEBEB] max-md:rounded-none  `} key={index}>
          <input class="md:hidden" type="checkbox" />
          <a
            class="max-md:collapse-title flex max-md:items-center md:mb-4 text-xs text-[#525252] md:underline max-md:after:text-lg"
            href={item.href}
          >
            {item.label}
          </a>
          <ul class="max-h-[initial] md:max-h-[540px] flex md:flex-wrap flex-col content-start collapse-content md:visible md:px-0 flex-col md:flex md:flex-wrap md:h-80 md:gap-[0_10px]">
            {item.children &&
              item.children.map((sub, index) => {
                return (
                  <li key={sub.label} id="0">
                    <a
                      href={sub.href}
                      class="text-xs text-[#525252] mb-3 max-w-[180px] block"
                    >
                      {sub.label}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>
      );
    })}
</ul>
      </div>
    </div>
  );
}