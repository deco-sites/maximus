export interface Props {
  description?: string;
}

export default function Description({ description }: Props) {
  return (
    <div class="w-full py-6 bg-white border-t border-[#ebebeb]">
      {description &&
        (
          <p
            class="max-w-[1236px] m-auto text-center text-[#333] text-sm max-md:px-6"
            dangerouslySetInnerHTML={{ __html: description }}
          >
          </p>
        )}
    </div>
  );
}
