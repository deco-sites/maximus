import Seo, { Props as SeoProps } from "apps/website/components/Seo.tsx";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { canonicalFromBreadcrumblist } from "apps/commerce/utils/canonical.ts";

export type Props = {
  jsonLD: ProductListingPage | null;
} & Partial<Omit<SeoProps, "jsonLDs">>;

function Section({ jsonLD, ...props }: Props) {
  const title = jsonLD?.seo?.title;
  const description = jsonLD?.seo?.description;
  const canonical = jsonLD?.seo?.canonical.split("?page=")[0].toLocaleLowerCase();

  const noIndexing = !jsonLD || !jsonLD.products.length;

  return (
    <Seo
      {...props}
      title={title || props.title}
      description={description || props.description}
      canonical={canonical}
      jsonLDs={[jsonLD]}
      noIndexing={noIndexing}
    />
  );
}

export default Section;