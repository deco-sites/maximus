import { useMemo } from "preact/hooks";
import { ProductListingPage } from "apps/commerce/types.ts";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

export type Props = Pick<ProductListingPage, "sortOptions">;

const portugueseMappings = {
  "relevance:desc": "Relevância",
  "price:desc": "Maior Preço",
  "price:asc": "Menor Preço",
  "orders:desc": "Mais vendidos",
  "name:desc": "Nome - de Z a A",
  "name:asc": "Nome - de A a Z",
  // "release:desc": "Relevância - Decrescente",
  "discount:desc": "Maior desconto",
  "release:desc": "Lançamento",
};
function Sort({ sortOptions }: Props) {
  const sort = useSort();

  return (
    <select
      id="sort"
      name="sort"
      onInput={applySort}
      class="w-min h-[48px] px-1 m-2 cursor-pointer outline-none border text-sm font-normal tracking-[0px] text-neutral-800 border-solid border-[#EAEAEA]"
    >
      {sortOptions.map(({ value, label }) => ({
        value,
        label: portugueseMappings[label as keyof typeof portugueseMappings],
      })).filter(({ label }) => label).map(({ value, label }) => (
        <option key={value} value={value} selected={value === sort}>
          <span class="text-sm">{label}</span>
        </option>
      ))}
    </select>
  );
}

export default Sort;
