import CategoryText from "$store/islands/CategoryTextHeader.tsx";

export interface Props {
  /** @format html */
  text?: string;
}

export default function CategoryTextHeader(
  props: Props,
) {
  const {
    text =
      "Contamos com mais de <strong>3 mil tecidos finos</strong> exclusivos e de qualidade para vestidos de <strong>festa</strong>, vestidos de <strong>noiva</strong> e <strong>roupas casuais</strong>. Confira opções de tecidos na Maior Loja de Tecidos Finos Online.",
  } = props;

  if (text) {
    return (
      <div class="w-full max-w-[1236px] mx-auto my-4 max-md:px-3">
        <CategoryText text={text} />
      </div>
    );
  }
}
