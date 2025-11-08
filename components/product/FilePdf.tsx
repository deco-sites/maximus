import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export interface Props {
    productId: string;
}

function FilePdf({ productId }: Props) {
    const idItem = useSignal('');
    const fileItem = useSignal('');

    useEffect(() => {
        const controller = new AbortController();
        const fetchFile = async () => {
            try {
                const res = await fetch(
                    "https://secure.maximustecidos.com.br/api/dataentities/FM/search?productId=" +
                        productId +
                        "&_fields=id,productId,file",
                    { signal: controller.signal },
                );
                const response = await res.json();
                if (response) {
                    idItem.value = response[0]?.id;
                    fileItem.value = response[0]?.file;
                }
            } catch (err: unknown) {
                if ((err as any)?.name !== "AbortError") {
                    console.log(err);
                }
            }
        };
        fetchFile();
        return () => controller.abort();
    }, [productId]);
    

  return (
    <div class="pdf-downloadd">
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
