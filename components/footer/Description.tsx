export interface Props {
  description?: string;
}

export default function Description({ description }: Props) {
  return (
    <div class="w-full max-w-[1236px] m-auto py-6 bg-white border-t border-[#ebebeb]">
      {description &&
        (
          <div
            class="max-w-[1236px] max-md:px-3 m-auto text-center text-[12px] font-normal leading-6"
            dangerouslySetInnerHTML={{ __html: description }}
          >
          </div>
        )}
    </div>
  );
}
