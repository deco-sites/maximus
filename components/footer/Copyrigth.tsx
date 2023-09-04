export interface Props {
  copyrigth?: {
    texto1: string;
    texto2?: string;
    texto3?: string;
  };
}

export default function Copyrigth({ copyrigth }: Props) {
  return (
    <div class="w-full py-6 bg-[#f5f5f5] border border-t border-[#ebebeb]">
      {copyrigth?.texto1 &&
        (
          <p class="max-w-[1206px] m-auto text-center text-[#999] text-[10px] mb-5">
            {copyrigth.texto1}
          </p>
        )}
      {copyrigth?.texto2 &&
        (
          <p class="max-w-[265px] m-auto text-center text-[#999] text-[10px] mb-5">
            {copyrigth.texto2}
          </p>
        )}
      {copyrigth?.texto3 &&
        (
          <p class="text-center text-[#999] text-[10px]">
            {copyrigth.texto3}
          </p>
        )}
    </div>
  );
}
