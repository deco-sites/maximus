import Avatar from "$store/components/ui/Avatar.tsx";
import { parseRange } from "deco-sites/std/utils/filters.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const reorder = (children: any) => {
  if (!children) return

  // eslint-disable-next-line
  return children.slice().sort((a: any, b: any) =>
    // eslint-disable-next-line
    a.value.localeCompare(b.value),
  );
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem(
  { url, selected, label, quantity }: FilterToggleValue,
) {
  return (
    <a href={url} class="flex items-center gap-2">
      <div
        aria-checked={selected}
        class="checkbox  rounded-none border-black w-[15px] h-[15px]"
      />
      <span class="text-sm font-normal leading-6 text-neutral-800">
        {label}
      </span>
      {quantity > 0 && (
        <span class="hidden text-sm text-base-300">({quantity})</span>
      )}
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  const flexDirection = key === "tamanho" || key === "cores-disponiveis"
    ? "flex-row"
    : "flex-col";  

  return (
    <ul class={`flex flex-wrap gap-2 ${flexDirection}`}>
      {reorder(values).map((item) => {
        const { url, selected, value, quantity } = item;
       <h3> {key}</h3>

        if (key === "cores-disponiveis" || key === "tamanho") {
          return (
            <a href={url} rel="nofollow">
              <Avatar
                content={value}
                variant={selected ? "active" : "default"}
                type={key === "cores-disponiveis" ? "color" : "default"}
              />
            </a>
          );
        }

        if (key === "price") {
          const range = parseRange(item.value);

          return range && (
            <ValueItem
              {...item}
              label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
            />
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 max-md:p-4 relative">
      {filters
        .filter(isToggle)
        .map((filter) => (
          <details open
            class={`collapse collapse-plus rounded-none row flex flex-col gap-4 
            ${filter.label === "Cores Disponíveis" && "order-1"}
              ${filter.label === "Categories" && "order-1"}
              ${filter.label === "Categoria" && "order-1"}
              ${filter.label === "Brands" && "order-2"}
              ${filter.label === "Marca" && "order-2"}
              ${filter.label === "Fibras" && "order-3"}
              ${filter.label === "Forros Indicados" && "order-4"}
              ${filter.label === "Utilização" && "order-5"}
              ${filter.label === "Corte e Modelagem" && "order-6"}
              ${filter.label === "Tendências" && "order-7"}
               ${filter.label === "Período" && "order-8"}
               ${filter.label === "PriceRanges" && "order-9"}
               ${filter.label === "Preço" && "order-9"}
               ${filter.label === "Departments" && "hidden"}
               ${filter.label === "Departamento" && "hidden"}
               ${filter.label === "Composi��o" && "hidden"}
               ${filter.label === "Composicao" && "hidden"}
               ${filter.label === "Subcategoria" && "hidden"}`}
          >           
            {filter.label === "Forros Indicados" && (
              <img
                src="/arquivos/banner-filter.png"
                alt="Forros Indicados"
                width={236}
                loading={"lazy"}
              />
            )}
            <summary class="collapse-title px-0 text-base font-semibold leading-[19px] text-neutral-800">
              {filter.label === "Brands"
                ? "Marcas"
                : filter.label === "PriceRanges"
                ? "Preço"
                : filter.label === "Categories"
                ? "Categorias"
                : filter.label}
            </summary>
            <FilterValues {...filter} />
          </details>
        ))}
    </ul>
  );
}

export default Filters;
