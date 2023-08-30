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
      class="bg-[#171413] w-full h=[29px] flex justify-evenly text-white pt-2 pb-2 text-xs"
    >
      <p>Atendimento - {telefone}</p>
      <p>WhatsApp - {whatsApp}</p>
    </div>
  );
}

export default Contact;
