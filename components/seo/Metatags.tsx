import { Head } from "$fresh/runtime.ts";
import {
  handleSEO,
  tagsFromListing,
  tagsFromProduct,
} from "deco-sites/std/utils/seo.ts";
import Preview from "deco-sites/std/components/seo/components/Preview.tsx";
import type { Props } from "deco-sites/std/components/seo/types.ts";

function Metatags(props: Props) {
  const {
    titleTemplate = "",
    descriptionTemplate = "",
    context,
  } = props;

  const tags = context?.["@type"] === "ProductDetailsPage"
    ? tagsFromProduct(context, titleTemplate)
    : context?.["@type"] === "ProductListingPage"
    ? tagsFromListing(context, titleTemplate, descriptionTemplate)
    : null;

    const { canonical } = handleSEO(props, tags);

    console.log({ canonical })

    return (
        <>
            <Head>
                {canonical && <link rel="canonical" href={canonical.toLowerCase()} />}

                {props?.noIndexNoFollow && (
                    <meta name="robots" content="noindex, nofollow" />
                )}
            </Head>
        </>
    );
}

export { Preview };

export default Metatags;