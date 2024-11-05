import { useId } from "$store/sdk/useId.ts";

export interface Props {
  telefone?: string;
  whatsApp?: string;
}

function Contact({
  telefone = "(45) 3020-1345",
  whatsApp = "(45) 99911-0056",
}: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="hidden md:flex bg-[#171413] w-full h=[29px] justify-evenly text-white pt-2 pb-2 text-xs z-10"
      style="z-index: 10;"
    >
      <p>Atendimento - {telefone}</p>
      <a
        class="hover:text-[#23527c] hover:underline transition-[0.2s] z-10"
        href={`https://api.whatsapp.com/send?phone=55${
          whatsApp.replace(/\D/g, "")
        }`}
        target="_blank"
              style="z-index: 10;"
      >
        WhatsApp - {whatsApp}
      </a>
    </div>
  );
}

export default Contact;
