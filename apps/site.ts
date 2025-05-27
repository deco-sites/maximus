import commerce, { Props } from "apps/commerce/mod.ts";
import { type App as A, type FnContext } from "@deco/deco";
import manifest, { Manifest } from "../manifest.gen.ts";
import type { Manifest as VtexManifest } from "apps/vtex/manifest.gen.ts";

export type App = ReturnType<typeof Site>;
export type AppContext = FnContext<Props, Manifest & VtexManifest>;

export default function Site(
  { theme, ...state }: Props,
): A<Manifest, Props, [ReturnType<typeof commerce>]> {
  try {
    console.log("rodei");
    return {
      state,
      manifest,
      dependencies: [
        commerce({
          ...state,
          global: theme ? [...(state.global ?? []), theme] : state.global,
        }),
      ],
    };
  } catch (error) {
    console.log(error);
    return {
      state,
      manifest,
      dependencies: [
        commerce({
          ...state,
          global: theme ? [...(state.global ?? []), theme] : state.global,
        }),
      ],
    };
  }
}

export type Storefront = ReturnType<typeof Site>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
