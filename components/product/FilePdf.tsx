import { useSignal } from "@preact/signals";

export interface Props {
    productId: string;
}

function FilePdf({ productId }: Props) {
    const idItem = useSignal('');
    const fileItem = useSignal('');

   const fetchFile = async () => {
 try {
    await fetch(`/api/dataentities/FM/search?productId=${productId}&_fields=id,productId,file`).then(response => response.json()).then(response => {
        if(response){             
            idItem.value = response[0]?.id;
            fileItem.value = response[0]?.file;
        }       
    })
 } catch (err) {
    console.log(err)
 }
    }

    fetchFile();
    

  return (
    <div>
       {idItem.value && fileItem.value && (
        <a href={`https://tfcszo.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=FM-${idItem.value}&fileName=${fileItem.value}`} class="w-[250px] text-[#171413] font-medium text-center border text-sm transition-all duration-[0.3s] block mt-5 px-5 py-[15px] border-solid border-[#171413] hover:bg-[#171413] hover:text-white">
        Baixar Manual em PDF
        </a>
       )         
       }
    </div>
  );
}

export default FilePdf;
