export interface Props {
  breadcrumb?: string;
  title?: string;
  /** @format html */
  html?: string;
  /** @format textarea */
  text?: string;
}

export default function Institucional(props: Props) {
  const {
    breadcrumb = "",
    title = "Troca e Devolução",
    html = "",
    text = "Lorem...",
  } = props;
  return (
    <div class="w-full max-w-[96%] md:max-w-[1236px] mx-auto mt-40 md:mt-20 py-[25px]">
      <div class="flex items-center mb-5">
        <span class="flex items-center text-xs tracking-[0px] text-neutral-800 capitalize underline after:content-[''] after:w-[3px] after:h-[3px] after:block after:bg-black after:mx-[7px] after:my-0 after:rounded-[50%]">
          Home
        </span>
        <span class="text-xs font-normal leading-6 flex items-center">
          {breadcrumb ? breadcrumb : title}
        </span>
      </div>
      <div class="border border-neutral-100 mb-[100px] px-5 md:px-10 py-[25px] border-solid">
        <h1 class="text-[22px] font-semibold leading-[29px] tracking-[0px] text-[#171413] mb-10">
          {title}
        </h1>
        {text && (
          <p
            class="text-[15px] text-shadow leading-[19px] tracking-[0px] text-neutral-800"
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </p>
        )}
        {html &&
          (
            <div
              class="text-shadow leading-[19px] tracking-[0px] text-neutral-800"
              dangerouslySetInnerHTML={{ __html: html }}
            >
            </div>
          )}
      </div>
    </div>
  );
}
