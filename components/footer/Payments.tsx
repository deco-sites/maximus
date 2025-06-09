import Image from "apps/website/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PaymentsItem {
  image: LiveImage;
  size: number;
}

export interface SecurityItem {
  image: LiveImage;
  link?: string;
  width: number;
  height: number;
}

export default function Payments({ payments, security }: {
  payments?: { items?: PaymentsItem[] };
  security?: { items?: SecurityItem[] };
}) {
  return (
    <div class="w-full bg-white pt-7 pb-7 border-t border-[#ebebeb]">
      <div class="max-w-[1236px] m-auto flex justify-between items-center max-md:flex-col max-md:items-start max-md:px-3">
        <div class="w-[35%] flex items-center max-md:flex-col max-md:items-start max-md:w-full">
          <p class="text-xs text-[#999] mr-4">Pagamentos:</p>
          {payments && payments.items && payments.items.length > 0 && (
            <ul class="flex justify-end items-center flex-wrap max-md:justify-start">
              {payments.items.map((item) => {
                return (
                  <li class="my-3 mr-7">
                    {item?.image &&
                      (
                        <Image
                          src={item?.image}
                          alt="icone de pagamento"
                          title="icone de pagamento"
                          width={item?.size}
                          height={24}
                          loading="lazy"
                        />
                      )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div class="w-[60%] flex items-center max-md:flex-col max-md:items-start max-md:w-full">
          <p class="text-xs text-[#999] mr-4">Segurança:</p>        
            <div class="flex justify-center items-center max-md:flex-wrap max-md:justify-start">  
                    
                      <a href="#" class="cursor-default">
                        <Image
                          class="grayscale"
                          src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2244/493353df-b774-42a4-b73d-96b81fa6440b"
                          alt="lets encrypt"
                          title="lets encrypt"
                          width={64}
                          height={50}
                          loading="lazy"
                        />
                      </a>

                      <a href="https://www.lojaconfiavel.com/maximustecidos" class="block mx-2 max-md:mb-5">
                        <img
                          class="grayscale"
                          src="//service.yourviews.com.br/Image/ae97f62a-00ed-4eb7-8fbf-024f90f5ff8a/Footer.jpg"
                          alt="Loja Confiável"
                          title="Loja Confiável"
                          width={88}
                          height={91}
                          loading="lazy"
                        />
                      </a>

                      <a href="https://transparencyreport.google.com/safe-browsing/search?url=https://www.maximustecidos.com.br/" class="block mx-2 max-md:mb-5">
                      <Image
                        class="grayscale"
                        src="https://tfcszo.vteximg.com.br/arquivos/logo-google.svg"
                        alt="google safe"
                        title="google safe"
                        width={158}
                        height={45}
                        loading="lazy"
                      />
                      </a>
                      <a href="https://secure.vtex.com/?an=tfcszo" class="block mx-2 max-md:mb-5">
                      <Image
                        class="grayscale"
                        src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2244/1ef30a59-bf66-485d-b6e8-ecc59ff09c56"
                        alt="pci vtex"
                        title="pci vtex"
                        width={100}
                        height={62}
                        loading="lazy"
                      />                      
                      </a>
                      <iframe frameborder="0" scrolling="no" class="max-md:mb-5" width={168} height={70} src="https://www.google.com/shopping/customerreviews/badge?usegapi=1&merchant_id=107860355&position=INLINE&origin=https%3A%2F%2Fwww.maximustecidos.com.br&gsrc=3p&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.pt_BR.2nQ7-Je3qk8.O%2Fd%3D1%2Frs%3DAHpOoo8APPf5x2OHuU_4vxaQv22DSYiiAg%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1707920934479&_gfid=I0_1707920934479&parent=https%3A%2F%2Fwww.maximustecidos.com.br&pfname=&rpctoken=31896982"></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}