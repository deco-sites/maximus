import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

export default function Form() {
    const loading = useSignal(false);
    const success = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email = (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;
      const name = (e.currentTarget.elements.namedItem("name") as RadioNodeList)?.value;
      const phone = (e.currentTarget.elements.namedItem("phone") as RadioNodeList)?.value;
      const subject = (e.currentTarget.elements.namedItem("subject") as RadioNodeList)?.value;
      const message = (e.currentTarget.elements.namedItem("message") as RadioNodeList)?.value;
      const state = (e.currentTarget.elements.namedItem("state") as RadioNodeList)?.value;
      const city = (e.currentTarget.elements.namedItem("city") as RadioNodeList)?.value;

      await fetch("/api/dataentities/FC/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Adicione os cabeçalhos necessários conforme necessário
        },
        body: JSON.stringify({ email, name, phone, subject, message, state, city }),
      }).then(()=>{
    success.value=true;
    e.currentTarget?.elements?.reset();
  });

    } finally {
      loading.value = false;
    }
  };

  return (
     <form
          class="w-full max-w-[520px] flex flex-wrap justify-between"
          onSubmit={handleSubmit}
        >
         <div class="w-full mb-6 mt-7 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">SEU NOME:</label>
            <input
                    name="name"
                    class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"Nome e Sobrenome"}
                    required
            />
         </div>
         <div class="w-full md:w-[49%] mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">CIDADE:</label>
            <input
                    name="city"
                    class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"Cidade"}
                    required
            />
         </div>
         <div class="w-full md:w-[49%] mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">ESTADO:</label>
        
            <select name="state" class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"><option disabled="disabled" value=""></option> <option value="AC">Acre</option> <option value="AL">Alagoas</option> <option value="AP">Amapá</option> <option value="AM">Amazonas</option> <option value="BA">Bahia</option> <option value="CE">Ceará</option> <option value="DF">Distrito Federal</option> <option value="ES">Espírito Santo</option> <option value="GO">Goiás</option> <option value="MA">Maranhão</option> <option value="MT">Mato Grosso</option> <option value="MS">Mato Grosso do Sul</option> <option value="MG">Minas Gerais</option> <option value="PA">Pará</option> <option value="PB">Paraíba</option> <option value="PR">Paraná</option> <option value="PE">Pernambuco</option> <option value="PI">Piauí</option> <option value="RJ">Rio de Janeiro</option> <option value="RN">Rio Grande do Norte</option> <option value="RS">Rio Grande do Sul</option> <option value="RO">Rondônia</option> <option value="RR">Roraima</option> <option value="SC">Santa Catarina</option> <option value="SP">São Paulo</option> <option value="SE">Sergipe</option> <option value="TO">Tocantins</option> <option value="EX">Estrangeiro</option></select>
         </div>
         <div class="w-full mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">SEU E-MAIL:</label>
            <input
                    name="email"
                    class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"email@exemplo.com.br"}
                    required
            />
         </div>
         <div class="w-full mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">SEU TELEFONE:</label>
            <input
                    name="phone"
                    class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"(99)9999-9999"}
                    required
            />
         </div>
         <div class="w-full mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">ASSUNTO:</label>
            <input
                    name="subject"
                    class="h-10 text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"Assunto..."}
                    required
            />
         </div>
         <div class="w-full mb-6 flex flex-col">
            <label class="text-xs font-medium leading-[19px] tracking-[0.6px] text-neutral-800 uppercase">MENSAGEM:</label>
            <textarea
                    name="message"
                    class="h-[200px] text-sm font-normal leading-6 tracking-[0px] text-[#999999] border transition-[0.3s] pl-[15px] rounded-sm border-solid border-[#EAEAEA] hover:border-[#222]"
                    placeholder={"Mensagem..."}
                    required
            ></textarea>
         </div>
         <div class="w-full flex justify-end">
            <button type="submit"  disabled={loading} class="w-[200px] h-12 float-right flex items-center justify-center bg-[#171413] hover:opacity-80 text-xs font-medium leading-[19px] tracking-[0.6px] text-white transition-[0.3s] rounded-sm border-0">
                Enviar
            </button>
         </div>
         {
            success.value ?
            <p class="w-full mt-7 text-center">Enviado com sucesso!</p>
            :
            <></>
         }
        </form>
  );
}
