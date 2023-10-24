import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  content: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: Form;
  };
}

function Newsletter(
  { content }: Props,
) {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div
      class={"w-full max-w-[1236px] m-auto py-8 flex justify-around max-md:flex-col"}
    >
      <div class="max-w-[380px] flex flex-col gap-4">
        {content?.title && (
          <h5 class={"text-2xl font-medium max-md:text-center"}>
            {content?.title}
          </h5>
        )}
        {content?.description && <div>{content?.description}</div>}
      </div>
      <div class="flex flex-col gap-4 max-md:p-6">
        <form
          class="form-control"
          onSubmit={handleSubmit}
        >
          <div class="flex items-end max-md:flex-col">
            <div class="flex flex-col max-md:w-full">
              <label class="text-sm font-medium mb-2">Qual o seu nome?</label>
              <input
                name="name"
                class="input input-bordered border-[#ebebeb] md:w-[180px] text-base-content text-sm md:mr-4 max-md:mb-5 focus:outline-none"
                placeholder={"Ex:Maria"}
              />
            </div>
            <div class="flex flex-col max-md:w-full">
              <label class="text-sm font-medium mb-2">
                Nos conte qual o seu melhor e-mail
              </label>
              <input
                name="email"
                class="input input-bordered border-[#ebebeb] md:w-[270px] text-base-content text-sm md:mr-5 max-md:mb-5 focus:outline-none"
                placeholder={content?.form?.placeholder ||
                  "Ex.: exemplo@email.com.br"}
              />
            </div>
            <button
              type="submit"
              class="btn disabled:loading w-full md:max-w-[193px] bg-[#171413] text-white border border-[#171413] hover:bg-white hover:text-[#171413]"
              disabled={loading}
            >
              {content?.form?.buttonText || "Inscrever"}
            </button>
          </div>
        </form>
        {content?.form?.helpText && (
          <div
            class="text-sm hidden"
            dangerouslySetInnerHTML={{ __html: content?.form?.helpText }}
          />
        )}
      </div>
    </div>
  );
}

export default Newsletter;
