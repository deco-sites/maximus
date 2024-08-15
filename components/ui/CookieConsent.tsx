import { useId } from "$store/sdk/useId.ts";

const script = (id: string) => {
  const callback = () => {
    const KEY = "store-cookie-consent";
    const ACCEPTED = "accepted";
    const HIDDEN = "translate-y-[200%]";

    const consent = localStorage.getItem(KEY);
    const elem = document.getElementById(id);

    if (consent !== ACCEPTED && elem) {
      const accept = elem.querySelector("[data-button-cc-accept]");
      
      accept && accept.addEventListener("click", () => {
        localStorage.setItem(KEY, ACCEPTED);
        elem.classList.add(HIDDEN);
      });

      const close = elem.querySelector("[data-button-cc-close]");
      close &&
        close.addEventListener("click", () => elem.classList.add(HIDDEN));
      elem.classList.remove(HIDDEN);
    }
  };

  addEventListener("scroll", callback, { once: true });
};

export interface Props {
  title?: string;
  /** @format html */
  text?: string;
  policy?: {
    text?: string;
    link?: string;
  };
  buttons?: {
    allowText: string;
    cancelText?: string;
  };
  layout?: {
    position?: "Expanded" | "Left" | "Center" | "Right";
    content?: "Tiled" | "Piled up";
  };
}

const DEFAULT_PROPS = {
  title: "Cookies",
  text:
    "Guardamos estatísticas de visitas para melhorar sua experiência de navegação.",
  policy: {
    text: "Saiba mais sobre sobre política de privacidade",
    link: "/politica-de-privacidade",
  },
  buttons: {
    allowText: "Aceitar",
    cancelText: "Fechar",
  },
  layout: {
    position: "Expanded",
    content: "Piled up",
  },
};

function CookieConsent(props: Props) {
  const id = useId();
  const { title, text, policy, buttons, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  console.log({ title, text, policy, buttons, layout })

  return (
    <>
      <div
        id={id}
        class={`
          transform-gpu translate-y-[200%] transition fixed bottom-0 w-screen z-50 lg:flex
          ${layout?.position === "Left" ? "lg:justify-start" : ""}
          ${layout?.position === "Center" ? "lg:justify-center" : ""}
          ${layout?.position === "Right" ? "lg:justify-end" : ""}
        `}
      >
        <div
          class={`
          px-4 py-8 flex flex-col gap-4 bg-base-100 shadow-[rgba(0,0,0,0.1)_1px_2px_4px] border-2 border-solid border-[rgba(0,0,0,0.2)] 
          ${
            !layout?.position || layout?.position === "Expanded"
              ? "lg:w-full"
              : `
            ${layout?.content === "Piled up" ? "lg:w-[480px]" : ""}
            ${
                !layout?.content || layout?.content === "Tiled"
                  ? "lg:w-[520px]"
                  : ""
              }
          `
          }
          ${
            !layout?.content || layout?.content === "Tiled"
              ? "lg:flex-row lg:items-end"
              : ""
          }
          
        `}
        >
          <div
            class={`flex-auto flex flex-col gap-4 ${
              !layout?.content || layout?.content === "Tiled" ? "lg:gap-2" : ""
            }`}
          >
            <h3 class="hidden text-xl">{title}</h3>
            {text && (
              <div
                class="text-base leading-[1.5em] text-black text-center"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}

            {policy.link
              ? (
                <a href={policy.link} class="text-sm link link-secondary">
                  {policy.text}
                </a>
              )
              : <></>}
          </div>

          <div
            class={`flex justify-center flex-col gap-2 ${
              !layout?.position || layout?.position === "Expanded"
                ? "lg:flex-row"
                : ""
            }`}
          >
            <button
              class="btn bg-black text-white hover:bg-[rgb(34,34,34)]"
              data-button-cc-accept
            >
              {buttons.allowText}
            </button>
            <button class="hidden btn btn-outline" data-button-cc-close>
              {buttons.cancelText}
            </button>
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${script})("${id}");` }}
      />
    </>
  );
}

export default CookieConsent;
