import { useState } from "preact/hooks";

export interface Props {
  text?: string;
}

export default function Description({ text }: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {text && (
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          class={`w-full max-w-[1200px] mx-auto my-8 text-base font-normal leading-6 tracking-[0px] text-[#171413] text-center ${
            showMore ? "max-h-[650px]" : "max-h-[95px]"
          } overflow-hidden transition-all duration-[0.8s]`}
        >
        </p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="hidden max-md:block mx-auto mt-5 text-sm font-normal leading-6 tracking-[0] text-white px-5 py-2 rounded-[3px] border-[none] bg-[#171413]"
      >
        {showMore ? "Ver menos detalhes" : "Ver mais detalhes"}
      </button>
    </>
  );
}
