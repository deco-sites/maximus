import { Signal, useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import Button from "$store/components/ui/Button.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import type {
  SimulationOrderForm,
  SKU,
  Sla,
} from "deco-sites/std/packs/vtex/types.ts";

export interface Props {
  items: Array<SKU>;
}

const formatShippingEstimate = (estimate: string) => {
  const [, time, type] = estimate.split(/(\d+)/);

  if (type === "bd") return `${time}`;
  if (type === "d") return `${time} dias`;
  if (type === "h") return `${time} horas`;
};

function ShippingContent({ simulation }: {
  simulation: Signal<SimulationOrderForm | null>;
}) {
  const { cart } = useCart();

  const methods = simulation.value?.logisticsInfo?.reduce(
    (initial, { slas }) => [...initial, ...slas],
    [] as Sla[],
  ) ?? [];

  const locale = cart.value?.clientPreferencesData.locale || "pt-BR";
  const currencyCode = cart.value?.storePreferencesData.currencyCode || "BRL";

  if (simulation.value == null) {
    return null;
  }

  if (methods.length === 0) {
    return (
      <div class="p-2">
        <span>CEP inválido</span>
      </div>
    );
  }

  console.log("FFFFF", methods);

  return (
    <ul class="flex flex-col border border-solid border-[#f3f3f4]">
      <li>
        <h6 class="h-[38px] bg-[#f3f3f4] flex items-center justify-center text-xs font-semibold leading-[29px] tracking-[0px] text-[#0d0c22] rounded-[3px]">
          Resultados
        </h6>
      </li>
      {methods.map((method) => (
        <li class="flex justify-between p-[15px] border-b-[#f3f3f4] border-b border-solid">
          <span class="text-xs font-medium leading-[19px] tracking-[0px] text-[#0d0c22]">
            {method.deliveryChannel === "delivery"
              ? "Entrega " + method.name
              : "Retirada na Loja (" + method.pickupStoreInfo?.address?.city +
                "-" + method.pickupStoreInfo?.address?.state + ")"}
          </span>
          <span class="text-xs font-medium leading-[19px] tracking-[0px] text-[#0d0c22]">
            {formatShippingEstimate(method.shippingEstimate)} dias úteis
          </span>
          <span class="text-xs font-medium leading-[19px] tracking-[0px] text-[#0d0c22]">
            {method.price === 0 ? "Grátis" : (
              formatPrice(method.price / 100, currencyCode, locale)
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ShippingSimulation({ items }: Props) {
  const postalCode = useSignal("");
  const loading = useSignal(false);
  const simulateResult = useSignal<SimulationOrderForm | null>(null);
  const { simulate, cart } = useCart();

  const handleSimulation = useCallback(async () => {
    if (postalCode.value.length !== 8) {
      return;
    }

    try {
      loading.value = true;
      simulateResult.value = await simulate({
        items: items,
        postalCode: postalCode.value,
        country: cart.value?.storePreferencesData.countryCode || "BRA",
      });
    } finally {
      loading.value = false;
    }
  }, []);

  return (
    <div class="flex flex-col gap-2 mt-[27px] pt-[27px] border-t-[#eaeaea] border-t border-solid">
      <p class="text-sm font-normal leading-6 tracking-[0] text-neutral-800 mb-2.5">
        Calcular <b>frete</b> e <b>prazo</b>
      </p>
      <form
        class="join"
        onSubmit={(e) => {
          e.preventDefault();
          handleSimulation();
        }}
      >
        <input
          as="input"
          type="text"
          class="w-[280px] h-12 border text-sm font-normal leading-6 tracking-[0] text-[#999] p-[15px] rounded-sm border-solid border-[#eaeaea]"
          placeholder="00000-000"
          value={postalCode.value}
          maxLength={8}
          size={8}
          onChange={(e: { currentTarget: { value: string } }) => {
            postalCode.value = e.currentTarget.value;
          }}
        />
        <Button
          type="submit"
          loading={loading.value}
          class="w-[60px] h-12 text-sm font-normal leading-6 text-white ml-2 flex justify-center items-center rounded-[4px] border-[none] bg-[#171413]"
        >
          OK
        </Button>
      </form>

      <div>
        <div>
          <ShippingContent simulation={simulateResult} />
        </div>
      </div>
    </div>
  );
}

export default ShippingSimulation;
