import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import Cart from "$store/components/minicart/Cart.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Button from "$store/components/ui/Button.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));
const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

export interface Props {
  menu: MenuProps;
  searchbar?: SearchbarProps;
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
  logo?: { src: string; alt: string };
}

const Aside = (
  { title, onClose, children, logo }: {
    title: string;
    onClose?: () => void;
    children: ComponentChildren;
    logo?: { src: string; alt: string };
  },
) => (
  <div class="bg-base-100 grid grid-rows-[auto_1fr] h-full max-w-[100vw] md:max-w-[90vw]">
    <div
      class={`flex items-center border-b border-[#ebebeb] ${
        title === "Menu" ? "py-3 justify-center" : "justify-between"
      }`}
    >
      {title !== "Menu" &&
        (
          <div class="flex items-center px-6 py-3">
            <img
              width={16}
              height={16}
              src="/arquivos/icone-cart-black.svg"
              alt="icone cart"
              title="icone cart"
            />
            <span class="ml-3 text-base font-normal leading-6 tracking-[0.5px] uppercase">
              {title}
            </span>
          </div>
        )}
      {logo && (
        <Image
          class="invert"
          src={logo.src}
          alt={logo.alt}
          title={logo.alt}
          width={199}
          height={44}
        />
      )}
      {onClose && (
        <Button class="btn btn-ghost absolute right-0" onClick={onClose}>
          <Icon id="XMark" size={20} strokeWidth={2} />
        </Button>
      )}
    </div>
    <Suspense
      fallback={
        <div class="w-screen flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

function Drawers({ menu, searchbar, children, logo }: Props) {
  const { displayCart, displayMenu, displaySearchDrawer } = useUI();

  return (
    <Drawer // left drawer
      open={displayMenu.value || displaySearchDrawer.value}
      onClose={() => {
        displayMenu.value = false;
        displaySearchDrawer.value = false;
      }}
      aside={
        <Aside
          onClose={() => {
            displayMenu.value = false;
            displaySearchDrawer.value = false;
          }}
          title={displayMenu.value ? "Menu" : "Buscar"}
          logo={logo}
        >
          {displayMenu.value && <Menu {...menu} />}
          {displaySearchDrawer.value && <Searchbar {...searchbar} />}
        </Aside>
      }
    >
      <Drawer // right drawer
        class="drawer-end"
        open={displayCart.value !== false}
        onClose={() => displayCart.value = false}
        aside={
          <Aside
            title="Minha sacola"
            onClose={() => displayCart.value = false}
          >
            <Cart />
          </Aside>
        }
      >
        {children}
      </Drawer>
    </Drawer>
  );
}

export default Drawers;
