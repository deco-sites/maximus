export default function TableInfantis() {
  return (
    <div class="w-full max-md:overflow-x-scroll">
      <div class="flex justify-between p-[15px] md:p-[25px] max-md:w-max;">
        <div class="max-md:min-w-[250px] w-6/12 flex flex-col items-start justify-end text-sm font-semibold text-shadow tracking-[0px] text-neutral-800 whitespace-nowrap">
          Vestidos Infantis
        </div>

        <div class="flex flex-col items-center max-md:mx-2.5">
          <span class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap">
            P
          </span>
          <span class="text-sm font-medium text-shadow tracking-[0px] text-neutral-800 whitespace-nowrap">
            36 - 42
          </span>
        </div>
        <div class="flex flex-col items-center max-md:mx-2.5">
          <span class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap">
            M
          </span>
          <span class="text-sm font-medium text-shadow tracking-[0px] text-neutral-800 whitespace-nowrap">
            44 - 52
          </span>
        </div>
        <div class="flex flex-col items-center max-md:mx-2.5">
          <span class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap">
            G
          </span>
          <span class="text-sm font-medium text-shadow tracking-[0px] text-neutral-800 whitespace-nowrap">
            56 - 60
          </span>
        </div>
      </div>

      <div class="w-full [&>*:nth-child(odd)]:bg-[#eaeaea]">
        <div class="flex items-center justify-between px-[15px] py-2 max-md:w-max">
          <div class="max-md:w-[250px] flex items-center w-6/12 text-xs whitespace-nowrap font-medium tracking-[0px] text-neutral-800">
            <img
              class="mr-2.5"
              src="/arquivos/icon-tabela-33.svg"
              alt="icone"
            />
            VESTIDO INFANTIL (A PARTIR DE 6 ANOS)
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            6,00 M
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            6,00 M
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            6,00 M
          </div>
        </div>

        <div class="flex items-center justify-between px-[15px] py-2 max-md:w-max">
          <div class="max-md:w-[250px] flex items-center w-6/12 text-xs whitespace-nowrap font-medium tracking-[0px] text-neutral-800">
            <img
              class="mr-2.5"
              src="/arquivos/icon-tabela-34.svg"
              alt="icone"
            />
            VESTIDO INFANTIL (ATÉ 4 ANOS)
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            2,00 M
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            2,50 M
          </div>
          <div class="text-sm font-medium tracking-[0px] text-neutral-800 whitespace-nowrap max-md:mx-2.5">
            3,00 M
          </div>
        </div>
      </div>
    </div>
  );
}
