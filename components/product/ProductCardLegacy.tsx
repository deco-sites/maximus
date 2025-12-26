import { SendEventOnClick } from "$store/components/Analytics.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import WishlistIcon from "$store/islands/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import Image from "apps/website/components/Image.tsx";

//import Rating from "$store/islands/RatingYV.tsx";

export interface Layout {
  basics?: {
    contentAlignment?: "Left" | "Center";
    oldPriceSize?: "Small" | "Normal";
    ctaText?: string;
  };
  elementsPositions?: {
    skuSelector?: "Top" | "Bottom";
    favoriteIcon?: "Top right" | "Top left";
  };
  hide?: {
    productName?: boolean;
    productDescription?: boolean;
    allPrices?: boolean;
    installments?: boolean;
    skuSelector?: boolean;
    cta?: boolean;
  };
  onMouseOver?: {
    image?: "Change image" | "Zoom image";
    card?: "None" | "Move up";
    showFavoriteIcon?: boolean;
    showSkuSelector?: boolean;
    showCardShadow?: boolean;
    showCta?: boolean;
  };
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;
  layout?: Layout;
}

const relative = (url: string) => {
  const link = new URL(url);
  return `${link.pathname}`;
};

const WIDTH = 234;
const HEIGHT = 234;

function ProductCard({ product, preload, itemListName, layout }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
  } = product;

  const {
    availability,
  } = useOffer(offers);

  const id = `product-card-${productID}`;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);
  const possibilities = useVariantPossibilities(product);
  const variants = Object.entries(Object.values(possibilities)[0] ?? {});
  const nameFormated = product.isVariantOf?.name;

  const fretegratis = product?.additionalProperty?.find((item: any) =>
    item.value === "Frete Grátis"
  );

  const novidades = product?.additionalProperty?.find((item: any) =>
    item.value === "Novidade"
  );

  const descontoVariacao = product?.additionalProperty?.some((item) =>
  item.name === "cluster" && item.propertyID === "162"
  )

  const isSinger = product?.brand?.name === "SINGER (Jundiaí - SP)";
  
  const isMeter =
    (product?.additionalProperty?.find((item) => item.name === "category")
            ?.value === "TECIDOS" &&
        !product?.additionalProperty?.some((item) =>
          item.name === "cluster" && item.propertyID === "160"
        )) ||
      (product?.additionalProperty?.find((item) =>
            item.name === "category" && item.value === "Entretelas"
          ) !== undefined &&
        !product?.additionalProperty?.some((item) =>
          item.name === "cluster" && item.propertyID === "160"
        )) ||
      product?.additionalProperty?.find((item) =>
          item.name === "category" && item.value === "Crinol"
        ) !== undefined
      ? true
      : false;

  const discountt = listPrice &&
    Math.round(((listPrice - (price ? price : 0)) / listPrice) * 100);

  const l = layout;
  const align =
    !l?.basics?.contentAlignment || l?.basics?.contentAlignment == "Left"
      ? "left"
      : "center";

  const skuSelector = variants.map(([value, [link]]) => (
    <li>
      <a href={link}>
        <Avatar
          variant={link === url ? "active" : "default"}
          content={value}
          type={"default"}
        />
      </a>
    </li>
  ));
  const cta = (
    <a
      href={url && relative(url)}
      aria-label="view product"
      class="btn btn-block"
    >
      {l?.basics?.ctaText || "Ver produto"}
    </a>
  );

  return (
    <div
      id={id}
      class={`card card-compact group w-full ${
        align === "center" ? "text-center" : "text-start"
      } ${l?.onMouseOver?.showCardShadow ? "lg:hover:card-bordered" : ""}
        ${
        l?.onMouseOver?.card === "Move up" &&
        "duration-500 transition-translate ease-in-out lg:hover:-translate-y-2"
      }
      `}
      data-deco="view-product"
    >
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
      <figure
        class="relative overflow-hidden"
        style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        {/* flags */}
        <div class="absolute top-4 z-[8] left-0">
          <div class="flex flex-col">
            {fretegratis &&
              (
                <span class="flex items-center justify-center bg-[#6eb212] text-[10px] leading-[14px] text-center text-white uppercase w-[90px] h-[21px] font-bold rounded-[0_5px_5px_0] mb-1">
                  Frete Grátis
                </span>
              )}

            {novidades &&
              (
                <span class="flex items-center justify-center bg-black text-[10px] leading-[14px] text-center text-white uppercase w-[90px] h-[21px] font-bold rounded-[0_5px_5px_0] mb-1">
                  Novidade
                </span>
              )}

            {descontoVariacao &&
              (
                <span class="flex items-center justify-center bg-[#6eb212] text-[10px] leading-[14px] text-center text-white uppercase w-[90px] h-[21px] font-bold rounded-[0_5px_5px_0] mb-1">
                  10% à vista
                </span>
              )}

            {discountt && discountt > 0
              ? (
                <span class="flex items-center justify-center bg-[#ff6f61] text-[10px] leading-[14px] text-center text-white uppercase w-[90px] h-[21px] font-bold rounded-[0_5px_5px_0]">
                  -{discountt} % Off
                </span>
              )
              : ""}
          </div>
        </div>

        {/* Wishlist button */}
        <div
          class={`absolute top-2 z-10
          ${
            l?.elementsPositions?.favoriteIcon === "Top left"
              ? "left-2"
              : "right-2"
          }
          ${l?.onMouseOver?.showFavoriteIcon ? "block" : "lg:hidden"}
        `}
        >
          <WishlistIcon
            productGroupID={productGroupID}
            productID={productID}
          />
        </div>

        {/* ver mais detalhes */}
        <a
          href={url && relative(url)}
          class="bg-white items-center justify-center w-[143px] h-[29px] tracking-[0px] text-neutral-800 text-xs font-semibold absolute bottom-4 hidden group-hover:flex z-10"
        >
          Ver detalhes
        </a>

        {/* Product Images */}
        <a
          href={url && relative(url)}
          aria-label="hidden view product"
          class="grid grid-cols-1 grid-rows-1 w-full"
        >
          <Image
            src={front.url!}
            alt={name}
            title={name}
            width={WIDTH}
            height={HEIGHT}
            class={`bg-base-100 col-span-full row-span-full w-full ${
              l?.onMouseOver?.image == "Zoom image"
                ? "duration-100 transition-scale scale-100 lg:group-hover:scale-125"
                : ""
            }`}
            sizes="(max-width: 640px) 50vw, 20vw"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
          {(!l?.onMouseOver?.image ||
            l?.onMouseOver?.image == "Change image") && (
            <Image
              src={back?.url ?? front.url!}
              alt={name}
              title={name}
              width={WIDTH}
              height={HEIGHT}
              class="bg-base-100 col-span-full row-span-full transition-opacity w-full opacity-0 lg:group-hover:opacity-100"
              sizes="(max-width: 640px) 30vw, 20vw"
              loading="lazy"
              decoding="async"
            />
          )}
        </a>
        <figcaption
          class={`
          absolute bottom-1 left-0 w-full flex flex-col gap-3 p-2 ${
            l?.onMouseOver?.showSkuSelector || l?.onMouseOver?.showCta
              ? "transition-opacity opacity-0 lg:group-hover:opacity-100"
              : "lg:hidden"
          }`}
        >
          {/* SKU Selector */}
          {l?.onMouseOver?.showSkuSelector && (
            <ul class="flex justify-center items-center gap-2 w-full">
              {skuSelector}
            </ul>
          )}
          {l?.onMouseOver?.showCta && cta}
        </figcaption>
      </figure>
      {/* Prices & Name */}
      <div class="flex-auto flex flex-col py-2 gap-3 lg:gap-4">
        {/* SKU Selector */}
        {(!l?.elementsPositions?.skuSelector ||
          l?.elementsPositions?.skuSelector === "Top") && (
          <>
            {l?.hide?.skuSelector ? "" : (
              <ul
                class={`hidden items-center gap-2 w-full overflow-auto p-3 ${
                  align === "center" ? "justify-center" : "justify-start"
                } ${l?.onMouseOver?.showSkuSelector ? "lg:hidden" : ""}`}
              >
                {skuSelector}
              </ul>
            )}
          </>
        )}

        <div
          class="yv-review-quickreview flex justify-center items-center"
          value={productGroupID}
        >
        </div>
        {/* <Rating id={productGroupID} /> */}

        {l?.hide?.productName && l?.hide?.productDescription
          ? ""
          : (
            <div class="flex flex-col gap-0">
              {l?.hide?.productName
                ? ""
                : (
                  <h2 class="ellipsis-2 min-h-[30px] md:min-h-[46px] text-xs md:text-base text-base-content text-center">
                    {nameFormated}
                  </h2>
                )}
              {l?.hide?.productDescription
                ? ""
                : (
                  <p class="truncate text-sm lg:text-sm text-neutral hidden">
                    {product.description}
                  </p>
                )}
            </div>
          )}
        {l?.hide?.allPrices ? "" : (
          <div class="flex flex-col gap-2">
            <div
              class={`flex flex-wrap gap-0 ${
                l?.basics?.oldPriceSize === "Normal"
                  ? "lg:flex-row lg:gap-2"
                  : ""
              } ${align === "center" ? "justify-center" : "justify-center"}`}
            >
              {availability === "https://schema.org/InStock"
                ? (
                  <>
                    <div
                      class={`items-center flex-wrap mr-2 line-through text-base-300 text-xs justify-center${
                        l?.basics?.oldPriceSize === "Normal" ? "lg:text-xl" : ""
                      } ${listPrice !== price ? "flex" : "hidden"}`}
                    >
                      {formatPrice(listPrice, offers!.priceCurrency!)}
                    </div>
                    <div class="text-xs md:text-sm font-bold leading-[14px] text-[#171413] text-center">
                      {formatPrice(price, offers!.priceCurrency!)} {price
                        ? isMeter ? "/ metro" : "/ un"
                        : <p class="text-center font-medium">indisponível</p>}
                    </div>
                  </>
                )
                : <p class="text-center font-medium">indisponível</p>}
            </div>
            {installments && isSinger 
              ? <div class="text-base-300 text-xs text-center text-[#171413]">
                  ou {installments}
                </div>
              : 
                ""
            }
          </div>
        )}

        {/* SKU Selector */}
        {l?.elementsPositions?.skuSelector === "Bottom" && (
          <>
            {l?.hide?.skuSelector ? "" : (
              <ul
                class={`hidden items-center gap-2 w-full ${
                  align === "center" ? "justify-center" : "justify-start"
                } ${l?.onMouseOver?.showSkuSelector ? "lg:hidden" : ""}`}
              >
                {skuSelector}
              </ul>
            )}
          </>
        )}

        {!l?.hide?.cta
          ? (
            <div
              class={`flex-auto hidden items-end ${
                l?.onMouseOver?.showCta ? "lg:hidden" : ""
              }`}
            >
              {cta}
            </div>
          )
          : ""}
      </div>
    </div>
  );
}

export default ProductCard;
