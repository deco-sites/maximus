import { useId } from "$store/sdk/useId.ts";

export interface Props {
  telefone?: string;
  whatsApp?: string;
}

function Contact({
  telefone = "(45) 3020-1345",
  whatsApp = "(45) 99906 - 0660",
}: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="hidden md:flex bg-[#171413] w-full max-w-[1246px] mr-auto ml-auto h=[29px] justify-between text-white pt-2 pb-2 text-xs"
    >
      <p>Atendimento - {telefone}</p>

      <div class="flex items-center">
        <p>
          WhatsApp  <span class="mx-2">-</span> 
        </p>

        <a
          class="hover:text-[#23527c] hover:underline transition-[0.2s] z-10"
        href={`https://api.whatsapp.com/send?phone=55${
          whatsApp.replace(/\D/g, "")
        }`}
        target="_blank"
      >
        {whatsApp} 
      </a> 
      </div>
    </div>
  );
}

export default Contact;
