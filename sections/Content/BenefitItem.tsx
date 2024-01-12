import { useSignal } from "@preact/signals";
import Modal from "$store/components/ui/Modal.tsx";

export interface Props {
  title?: string;
  description?: string;
  content?: string;
}

export default function BenefitItem({ benefit }: Props) {
  const open = useSignal(false);

  return (
    <div class="flex items-center px-4 py-3 border border-[#eeeeee] rounded-[16px] max-md:min-w-max">
      <div class="flex-none">
        <img
          loading="lazy"
          width={45}
          src={benefit.image}
          alt="beneficios"
          title="beneficios"
          class="mr-2"
        />
      </div>
      <div
        onClick={() => open.value = true}
        class="cursor-pointer flex-auto flex flex-col gap-1 lg:gap-2"
      >
        <div
          class={`text-base lg:text-xl leading-7 text-base-content`}
        >
        </div>
        <p
          class={`text-sm text-[#262626]`}
          dangerouslySetInnerHTML={{
            __html: benefit.description,
          }}
        >
        </p>
      </div>
      <Modal
        class="flex items-center justify-center bg-white w-[96%] md:w-[765px] md:max-w-[765px] relative flex-col p-5 rounded-[15px]"
        loading="lazy"
        open={open.value}
        onClose={() => open.value = false}
      >
        <div
          class="w-full"
          dangerouslySetInnerHTML={{
            __html: benefit.content,
          }}
        >
        </div>
        <span
          class="w-full bg-black text-white font-normal rounded min-h-[42px] items-center flex justify-center cursor-pointer text-sm uppercase mt-[25px]"
          onClick={() => open.value = false}
        >
          entendi
        </span>
      </Modal>
    </div>
  );
}
