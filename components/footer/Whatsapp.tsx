import Image from "deco-sites/std/components/Image.tsx";

export default function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5545999110056"
      target="_blank"
      class="w-[49px] h-[49px] flex justify-center items-center bg-[#91CB44] shadow-[0px_3px_6px_#00000029] fixed z-[99] cursor-pointer transition-[0.3s] rounded-[25px] right-[110px] bottom-[15px] text-white after:content-['Whatsapp'] after:ml-[15px] after:text-[0px] hover:after:ml-[7px] hover:after:text-xs hover:w-[150px] after:font-semibold after:leading-[29px] after:mr-[-18px] hover:after:mr-0 after:tracking-[0.6px]"
    >
      <Image
        src="https://tfcszo.vteximg.com.br/arquivos/icon-whatsapp-cr.png?v=123"
        alt="logo whatsapp"
        title="logo whatsapp"
        width={20}
        height={20}
        loading="lazy"
      />
    </a>
  );
}
