import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/SliderPdp.tsx";
import { PLATFORM } from "$store/platform.ts";
import AddToCartButtonVNDA from "$store/islands/AddToCartButton/vnda.tsx";
import AddToCartButtonVTEX from "$store/islands/AddToCartButton/vtex.tsx";
import OutOfStock from "$store/islands/OutOfStock.tsx";
import ProductImageZoom from "$store/islands/ProductImageZoom.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import WishlistButton from "$store/islands/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import Image from "deco-sites/std/components/Image.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";

import Conservation from "$store/islands/Conservation.tsx";
import Payments from "$store/islands/Payments.tsx";
import Price from "$store/islands/Price.tsx";
import ColorsSimilars from "$store/islands/ColorsSimilars.tsx";

export type Variant = "front-back" | "slider" | "auto";

export interface Props {
  page: ProductDetailsPage | null;
  /**
   * @title Product view
   * @description Ask for the developer to remove this option since this is here to help development only and should not be used in production
   */
  variant?: Variant;
}

const WIDTH = 408;
const HEIGHT = 408;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

/**
 * Rendered when a not found is returned by any of the loaders run on this page
 */
function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <span class="font-medium text-2xl">Página não encontrada</span>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function ProductInfo({ page }: { page: ProductDetailsPage }) {
  const { product } = page;

  const {
    productID,
    offers,
    name = "",
    isVariantOf,
    additionalProperty = [],
  } = product;
  const {
    price = 0,
    listPrice,
    seller = "1",
    installments,
    availability,
    stock,
  } = useOffer(offers);

  const productGroupID = isVariantOf?.productGroupID ?? "";
  const discount = price && listPrice ? listPrice - price : 0;

  const isMeter =
    product?.additionalProperty?.find((item: any) => item.name === "category")
        ?.value === "TECIDOS"
      ? true
      : false;

  const stockAvailable = stock?.value;

  const novidades = product?.additionalProperty?.find((item: any) =>
    item.value === "Novidade"
  );

  const largura = product?.additionalProperty?.find((item: any) =>
    item.name === "Largura do Tecido ou Tamanho"
  )
    ?.value;

  const RefId = product?.additionalProperty?.find((item: any) =>
    item.name === "RefId"
  )
    ?.value;

  const pantone = product?.additionalProperty?.find((item: any) =>
    item.name === "Cor Pantone"
  )
    ?.value;

  const discountt = listPrice &&
    Math.round(((listPrice - price) / listPrice) * 100);

  return (
    <div class="px-[27px] py-4 bg-[#fbfbfb]">
      {/* infos rigth */}
      <div class="">
        <div class="flex items-center justify-between mb-3">
          <span class="w-[50%] text-[10px] font-bold leading-[34px] tracking-[0] text-neutral-800 italic whitespace-nowrap">
            {stockAvailable && isMeter
              ? (stockAvailable * .1).toFixed(1) > 80000
                ? +"Estoque disponível"
                : (stockAvailable * .1).toFixed(1) + " metros em estoque"
              : stockAvailable && stockAvailable > 80000
              ? "Estoque disponível"
              : stockAvailable + " Unidades disponíveis"}
          </span>
          <div class="w-[50%]">
            {pantone &&
              (
                <p class="text-[13px] font-normal tracking-[0] text-[#171413] leading-4">
                  <strong>Cor Pantone</strong> <br /> {pantone}
                </p>
              )}
          </div>
        </div>
        {/* flags */}
        <div class="mb-5">
          {novidades &&
            (
              <span class="bg-black text-white text-sm font-bold px-3.5 py-1 rounded-[0_5px_5px_0] mr-3">
                Novidade
              </span>
            )}

          {discountt && discountt > 0
            ? (
              <span class="bg-[#ff6f61] text-white text-sm font-bold ml-1.5 px-3.5 py-1 rounded-[0_5px_5px_0]">
                -{discountt} % Off
              </span>
            )
            : ""}
        </div>
        {/* referencia */}
        <div class="flex flex-wrap text-[13px] font-normal tracking-[0] text-[#171413] leading-4 my-5">
          <div class="w-[60%] mb-5">
            <p>
              <strong>Número de referência</strong> <br />
              {RefId}
            </p>
          </div>
          {isMeter && (
            <>
              <div class="w-[40%]">
                <p>
                  <strong>Preço por metro</strong> <br />{" "}
                  {formatPrice(price, offers!.priceCurrency!)}
                </p>
              </div>
              <div class="w-[60%] mb-5">
                <p>
                  <strong>Largura do tecido</strong> <br /> {largura}
                </p>
              </div>
              <div class="w-[40%]">
                <p>
                  <strong>Pedido mínimo</strong> <br /> 40 cm
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Prices */}
      <Price
        price={price}
        listPrice={listPrice}
        installments={installments}
        offers={offers}
        isMeter={isMeter}
      />

      {/*modal payments*/}
      <Payments
        price={price}
        offers={offers!.priceCurrency!}
        numberInstallments={3}
      />

      {/* Sku Selector */}
      <div class="mt-4 sm:mt-6 hidden">
        <ProductSelector product={product} />
      </div>
      {/* Add to Cart and Favorites button */}
      <div class="mt-6 flex flex-col gap-2 px-0 pt-5 border-t-[#eaeaea] border-t border-solid">
        {availability === "https://schema.org/InStock"
          ? (
            <>
              {PLATFORM === "vtex" && (
                <AddToCartButtonVTEX
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  offers={offers}
                  discount={discount}
                  seller={seller}
                  isMeter={isMeter}
                  stock={stockAvailable}
                />
              )}
              {PLATFORM === "vnda" && (
                <AddToCartButtonVNDA
                  name={name}
                  productID={productID}
                  productGroupID={productGroupID}
                  price={price}
                  discount={discount}
                  additionalProperty={additionalProperty}
                />
              )}
            </>
          )
          : <OutOfStock productID={productID} />}
      </div>
      <div>
        <p class="text-[13px] font-normal tracking-[0] text-[#171413] leading-4 flex items-center justify-center mt-2">
          Compra 100% segura.
        </p>
      </div>
      {/* Shipping Simulation */}
      <div class="mt-8">
        <ShippingSimulation
          items={[{
            id: Number(product.sku),
            quantity: 1,
            seller: seller,
          }]}
        />
      </div>

      {/* Analytics Event */}
      <SendEventOnLoad
        event={{
          name: "view_item",
          params: {
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
    </div>
  );
}

const useStableImages = (product: ProductDetailsPage["product"]) => {
  const imageNameFromURL = (url = "") => {
    const segments = new URL(url).pathname.split("/");
    return segments[segments.length - 1];
  };

  const images = product.image ?? [];
  const allImages = product.isVariantOf?.hasVariant.flatMap((p) => p.image)
    .reduce((acc, img) => {
      if (img?.url) {
        acc[imageNameFromURL(img.url)] = img.url;
      }
      return acc;
    }, {} as Record<string, string>) ?? {};

  return images.map((img) => {
    const name = imageNameFromURL(img.url);

    return { ...img, url: allImages[name] ?? img.url };
  });
};

function Details({
  page,
  variant,
}: { page: ProductDetailsPage; variant: Variant }) {
  const { product, breadcrumbList } = page;
  const {
    name = "",
    productID,
    isVariantOf,
  } = product;
  const id = useId();
  const images = useStableImages(product);
  const productGroupID = isVariantOf?.productGroupID ?? "";

  const isMeter =
    product?.additionalProperty?.find((item: any) => item.name === "category")
        ?.value === "TECIDOS"
      ? true
      : false;

  const descriptionCurt = product.isVariantOf &&
    product.isVariantOf.additionalProperty?.find((item: any) =>
      item.name === "Descrição Curta"
    )
      ?.value;

  const composition = product?.additionalProperty?.find((item: any) =>
    item.name === "Composicao"
  )
    ?.value;

  const gramatura = product.isVariantOf &&
    product.isVariantOf.additionalProperty.find((item: any) =>
      item.name === "Gramatura aproximada (Tecidos em M ou UN)"
    )?.value;

  const conservationsList = product.isVariantOf?.additionalProperty.filter(
    (item: any) => {
      if (
        item.name === "Lavagem" || item.name === "Alvejamento" ||
        item.name === "Passadoria" || item.name === "Limpeza a Seco" ||
        item.name === "Secagem Natural" ||
        item.name === "Processo de Secagem em Tambor" ||
        item.name === "Limpeza a Umido Profissional"
      ) {
        return item.value;
      }
    },
  );

  if (variant === "slider") {
    return (
      <div class="max-md:mt-32">
        {/* Breadcrumb */}
        <div class="max-w-[1236px] mx-auto max-md:px-5 flex justify-start mb-3">
          <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          />
        </div>
        <div class="flex md:hidden my-5 px-5">
          <div class="w-[90%]">
            <h1 class="text-2xl font-normal leading-6 tracking-[0] text-[#171413]">
              {name}
            </h1>
          </div>
          <div class="w-[10%]">
            <WishlistButton
              productID={productID}
              productGroupID={productGroupID}
            />
          </div>
        </div>
        <div
          id={id}
          class="max-w-[1236px] mx-auto flex items-start justify-between max-md:flex-col"
        >
          <div class="flex flex-col max-md:order-3 w-full md:w-[32%] pr-4 max-md:px-4">
            <div class="max-md:order-2 max-md:border-b border-[#ebebeb] max-md:pb-5 flex">
              <div class="flex items-center w-[42%] text-[13px] font-medium leading-[19px] tracking-[0px] text-[#171413]">
                Vendido e entregue por
              </div>
              <div class="w-[58%]">
                <a
                  href="#"
                  class="text-[13px] font-medium leading-[19px] tracking-[0px] text-[#171413] underline"
                >
                  MAXIMUS TECIDOS TOLEDO - PR
                </a>
              </div>
            </div>
            <div class="flex mt-5 max-md:hidden">
              <div class="w-[80%]">
                <h1 class="text-2xl font-normal leading-6 tracking-[0] text-[#171413]">
                  {name}
                </h1>
              </div>
              <div class="w-[20%] flex items-center justify-end">
                <WishlistButton
                  productID={productID}
                  productGroupID={productGroupID}
                />
              </div>
            </div>
            <div class="max-md:order-1 flex md:mt-5 md:border-t md:border-b border-[#ebebeb] py-7">
              <p class="text-sm tracking-[0] text-[#171413] leading-[21px]">
                {descriptionCurt}
              </p>
            </div>
            <div class="max-md:order-3 py-7">
              {composition &&
                (
                  <p class="text-[13px] leading-4 tracking-[0] text-[#171413] mb-3">
                    <strong>Composição</strong>
                    <br />
                    <span class="lowercase font-roboto mt-2 block">
                      {composition}
                    </span>
                  </p>
                )}

              {gramatura &&
                (
                  <p class="text-[13px] leading-4 tracking-[0] text-[#171413] mb-3">
                    <strong>Gramatura</strong>
                    <br />
                    <span class="lowercase font-roboto mt-2 block">
                      {gramatura} gramas/m
                    </span>
                  </p>
                )}

              {isMeter && <Conservation conservationsList={conservationsList} />}
            </div>

            <div class="max-md:order-4">
              {isMeter && <ColorsSimilars />}
            </div>
          </div>
          {/* images */}
          <div class="max-md:order-1 max-md:px-5 w-full md:w-[32%]">
            {/* Image Slider */}
            <div class="relative sm:col-start-2 sm:col-span-1 sm:row-start-1">
              <Slider class="carousel carousel-center gap-6 w-full">
                {images.map((img, index) => (
                  <Slider.Item
                    index={index}
                    class="carousel-item w-full"
                  >
                    <Image
                      class="w-full"
                      sizes="(max-width: 408px) 100vw, 40vw"
                      style={{ aspectRatio: ASPECT_RATIO }}
                      src={img.url!}
                      alt={img.alternateName}
                      width={WIDTH}
                      height={HEIGHT}
                      // Preload LCP image for better web vitals
                      preload={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </Slider.Item>
                ))}
              </Slider>

              <Slider.PrevButton
                class="absolute left-2 top-1/2 btn-slider-custom  btn-circle"
                disabled
              >
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>

              <Slider.NextButton
                class="absolute right-2 top-1/2 btn-slider-custom  btn-circle"
                disabled={images.length < 2}
              >
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>

              <div class="absolute top-2 right-2 bg-base-100 rounded-full">
                <ProductImageZoom
                  images={images}
                  width={700}
                  height={Math.trunc(700 * HEIGHT / WIDTH)}
                />
              </div>
            </div>
            {/* Dots */}
            <ul class="flex gap-1 justify-start overflow-auto">
              {images.map((img, index) => (
                <li class="min-w-[64px] min-h-[64px]">
                  <Slider.Dot index={index}>
                    <Image
                      style={{ aspectRatio: ASPECT_RATIO }}
                      class="group-disabled:border-base-300 border "
                      width={64}
                      height={64}
                      src={img.url!}
                      alt={img.alternateName}
                    />
                  </Slider.Dot>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Info */}
          <div class="max-md:order-2 w-full md:w-[32%]">
            <ProductInfo page={page} />
          </div>
        </div>
        <SliderJS rootId={id}></SliderJS>
      </div>
    );
  }

  /**
   * Product front-back variant.
   *
   * Renders two images side by side both on mobile and on desktop. On mobile, the overflow is
   * reached causing a scrollbar to be rendered.
   */
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-[50vw_25vw] sm:grid-rows-1 sm:justify-center">
      {/* Image slider */}
      <ul class="carousel carousel-center gap-6">
        {[images[0], images[1] ?? images[0]].map((img, index) => (
          <li class="carousel-item min-w-[100vw] sm:min-w-[24vw]">
            <Image
              sizes="(max-width: 640px) 100vw, 24vw"
              style={{ aspectRatio: ASPECT_RATIO }}
              src={img.url!}
              alt={img.alternateName}
              width={WIDTH}
              height={HEIGHT}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>

      {/* Product Info */}
      <div class="px-4 sm:pr-0 sm:pl-6">
        <ProductInfo page={page} />
      </div>
    </div>
  );
}

function ProductDetails({ page, variant: maybeVar = "auto" }: Props) {
  /**
   * Showcase the different product views we have on this template. In case there are less
   * than two images, render a front-back, otherwhise render a slider
   * Remove one of them and go with the best suited for your use case.
   */
  const variant = maybeVar === "auto"
    ? page?.product.image?.length && page?.product.image?.length < 2
      ? "front-back"
      : "slider"
    : maybeVar;

  const description = page?.product.description;

  const iframe = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.find((item: any) =>
      item.name === "Vídeo"
    );

  const forrosIndicados = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.filter((item: any) =>
      item.name === "Forros Indicados"
    );

  const utilizacao = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.filter((item: any) =>
      item.name === "Utilização"
    );

  const modelagem = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.filter((item: any) =>
      item.name === "Corte e Modelagem"
    );

  const periodos = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.filter((item: any) =>
      item.name === "Período"
    );

  const tendencias = page?.product.isVariantOf &&
    page?.product.isVariantOf.additionalProperty.filter((item: any) =>
      item.name === "Tendências"
    );

  return (
    <div class="container py-0 sm:py-5">
      {page ? <Details page={page} variant={variant} /> : <NotFound />}
      {page &&
        (
          <div class="w-full max-w-[1236px] mx-auto max-md:px-5">
            <div class="flex flex-wrap">
              {forrosIndicados && forrosIndicados?.length > 0 &&
                (
                  <div class="w-[100%] md:w-[50%]">
                    <h3 class="text-lg md:text-2xl font-semibold leading-[26px] tracking-[0] text-[#171413] mx-0 my-10">
                      Estilista virtual
                    </h3>
                    <div class="w-full flex flex-wrap justify-between max-md:flex-col">
                      <div class="w-full md:w-[50%] mb-10 flex items-start">
                        <img
                          width={44}
                          height={44}
                          src="/arquivos/virtual-forros-indicados.png"
                          alt="forro"
                        />
                        <div class="ml-4">
                          <h5 class="text-[13px] font-semibold tracking-[0] leading-4">
                            Forros Indicados
                          </h5>
                          {forrosIndicados.map((item: any) => (
                            <p class="text-[13px] font-normal tracking-[0] leading-4 mt-2.5">
                              {item.value}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div class="w-full md:w-[50%] mb-10 flex items-start">
                        <img
                          width={44}
                          height={44}
                          src="/arquivos/virtual-utilizacao.png"
                          alt="forro"
                        />
                        <div class="ml-4">
                          <h5 class="text-[13px] font-semibold tracking-[0] leading-4">
                            Utilização
                          </h5>
                          {utilizacao &&
                            utilizacao.map((item: any) => (
                              <p class="text-[13px] font-normal tracking-[0] leading-4 mt-2.5">
                                {item.value}
                              </p>
                            ))}
                        </div>
                      </div>

                      <div class="w-full md:w-[50%] mb-10 flex items-start">
                        <img
                          width={44}
                          height={44}
                          src="/arquivos/virtual-corte-e-modelagem.png"
                          alt="forro"
                        />
                        <div class="ml-4">
                          <h5 class="text-[13px] font-semibold tracking-[0] leading-4">
                            Corte e Modelagem
                          </h5>
                          {modelagem &&
                            modelagem.map((item: any) => (
                              <p class="text-[13px] font-normal tracking-[0] leading-4 mt-2.5">
                                {item.value}
                              </p>
                            ))}
                        </div>
                      </div>

                      <div class="w-full md:w-[50%] mb-10 flex items-start">
                        <img
                          width={44}
                          height={44}
                          src="/arquivos/virtual-tendencias.png"
                          alt="forro"
                        />
                        <div class="ml-4">
                          <h5 class="text-[13px] font-semibold tracking-[0] leading-4">
                            Tendências
                          </h5>
                          {tendencias &&
                            tendencias.map((item: any) => (
                              <p class="text-[13px] font-normal tracking-[0] leading-4 mt-2.5">
                                {item.value}
                              </p>
                            ))}
                        </div>
                      </div>

                      <div class="w-full md:w-[50%] mb-10 flex items-start">
                        <img
                          width={44}
                          height={44}
                          src="/arquivos/virtual-periodo.png"
                          alt="forro"
                        />
                        <div class="ml-4">
                          <h5 class="text-[13px] font-semibold tracking-[0] leading-4">
                            Período
                          </h5>
                          {periodos &&
                            periodos.map((item: any) => (
                              <p class="text-[13px] font-normal tracking-[0] leading-4 mt-2.5">
                                {item.value}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {iframe &&
                (
                  <div class="w-[100%] md:w-[50%]">
                    <h3 class="text-lg md:text-2xl font-semibold leading-[26px] tracking-[0] text-[#171413] mx-0 my-10">
                      Vídeo
                    </h3>
                    <div class="w-full flex justify-center items-center bg-[#f5f5f5] py-10">
                      <iframe
                        class="w-full md:w-[523px] md:h-[295px]"
                        src={iframe.value}
                        frameBorder="0"
                      >
                      </iframe>
                    </div>
                  </div>
                )}
            </div>
            {description && (
              <h3 class="text-lg md:text-2xl font-bold leading-[26px] tracking-[0] text-[#171413] mx-0 my-10">
                Descrição:
              </h3>
            )}
            {description && (
              <div
                class="w-full max-w-[865px] text-sm tracking-[0] text-[#171413] leading-[21px]"
                dangerouslySetInnerHTML={{ __html: description }}
              >
              </div>
            )}
          </div>
        )}
    </div>
  );
}

export default ProductDetails;
