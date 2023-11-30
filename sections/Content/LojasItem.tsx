import { useState } from "preact/hooks";

export interface LojaItem {
  name?: string;
  /** @format textarea */
  address?: string;
  email?: string;
  /** @format textarea */
  call?: string;
  phone?: string;
  phoneFormated?: string;
  whatsapp?: string;
  whatsappFormated?: string;
  /** @format textarea */
  iframe?: string | undefined;
}

export default function InstitucionalLojas(
  { content }: { content: LojaItem[] },
) {
  const [store, setStore] = useState<string>("");

  return (
    <div class="w-full max-w-[96%] md:max-w-[1236px] mx-auto py-[25px]">
      <div class="flex items-center max-md:flex-col">
        {content && content?.map((item: LojaItem) => (
          <div class="mb-5 md:mr-9">
            <h5 class="text-base font-semibold leading-[29px] tracking-[0px] text-neutral-800 mb-[15px]">
              {item.name}
            </h5>
            <p class="text-[15px] font-medium text-shadow leading-[19px] tracking-[0px] text-neutral-800 mb-[5px]">
              Atendimento
            </p>
            <p class="text-[13px] font-medium leading-[19px] tracking-[0px] text-neutral-800 mb-6">
              {item.call}
            </p>
            <p class="text-[15px] font-medium text-shadow leading-[19px] tracking-[0px] text-neutral-800 mb-[5px]">
              Endereço:
            </p>
            <p class="text-[13px] font-medium leading-[19px] tracking-[0px] text-neutral-800 mb-6">
              {item.address}
            </p>
            <a
              class="text-[13px] font-medium leading-[19px] tracking-[0px] text-neutral-800 underline mb-[5px]"
              href={`mailto:${item.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-[15px] text-shadow">
                E-mail:
              </span>{" "}
              {item.email}
            </a>
            <br />
            <a
              class="text-[13px] font-medium leading-[19px] tracking-[0px] text-neutral-800 underline mb-[5px]"
              href={`tel:${item.phoneFormated}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-[15px] text-shadow">
                Telefone(s):
              </span>{" "}
              {item.phone}
            </a>
            <br />
            <a
              class="text-[13px] font-medium leading-[19px] tracking-[0px] text-neutral-800 underline mb-[5px]"
              href={`https://api.whatsapp.com/send?phone=${item.whatsappFormated}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="text-[15px] text-shadow">
                Whatsapp:
              </span>
              {item.whatsapp}
            </a>
            <div class="flex items-center my-5">
              <span
                onClick={() => setStore(item.iframe ? item.iframe : "")}
                class="bg-neutral-800 text-white mr-2 w-[145px] h-12 flex items-center justify-center text-xs font-medium leading-[19px] tracking-[0px] border border-neutral-800 cursor-pointer transition-[0.3s] mb-[5px] rounded-sm border-solid hover:opacity-75"
              >
                ver no mapa
              </span>
              <a
                class="w-[145px] h-12 bg-white flex items-center justify-center text-xs font-medium leading-[19px] tracking-[0px] text-neutral-800 border border-neutral-800 cursor-pointer transition-[0.3s] mb-[5px] rounded-sm border-solid hover:bg-neutral-800 hover:text-white"
                href="https://www.google.com.br/maps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
              </a>
            </div>
          </div>
        ))}
      </div>

      <iframe
        style={{ width: "100%" }}
        src={store
          ? store
          : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7887215059804!2d-53.74120758438543!3d-24.734132711828167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3958050b52019:0xf0dd8011b58f5e7d!2sAv. MaripÃ¡, 4846 - Jardim Europa, Toledo - PR, 85901-000!5e0!3m2!1spt-BR!2sbr!4v1662312646997!5m2!1spt-BR!2sbr"}
        width="600"
        height="450"
      >
      </iframe>
    </div>
  );
}
