import CategoryText from "$store/islands/CategoryTextHeader.tsx";

export interface IText {
  url?: string;
  text?: string;
}

export interface Props {
  urlCurrent: string;
  texts?: IText[];
}

export default function CategoryTextHeader(
  { urlCurrent, texts }: Props,
) {
  const seo = texts?.find((item: IText) => item.url === urlCurrent);

  return (
    <>
      {seo
        ? (
          <div class="w-full max-w-[1236px] mx-auto my-4 max-md:px-3">
            <CategoryText text={seo.text} />
          </div>
        )
        : <></>}
    </>
  );
}
