export interface Props {
  title: string;
  text?: string;
  link?: string;
}

export default function TitleShelf(props: Props) {
  const {
    title = "Novidades em Tecidos para Confecção de Roupas",
    text = "Só Tecidos de Qualidade",
    link = "#",
  } = props;
  return (
    <div class="w-full max-w-[1246px] mr-auto ml-auto my-6 flex justify-between items-center max-md:flex-col max-md:px-3">
      <div class="text-[#262626]">
        <h3 class="text-[20px] md:text-[22px] font-semibold">{title}</h3>
        <p class="text-sm md:text-[18px]">{text}</p>
      </div>
      <a
        class="w-[100%] md:w-[220px] h-[50px] max-md:mt-3 bg-[#171413] rounded-[8px] md:rounded-[26px] flex items-center justify-center text-base text-white"
        href={link}
      >
        Conferir tudo
      </a>
    </div>
  );
}
