import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { PLATFORM } from "$store/platform.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, searchbar, logo }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden pt-1 flex flex-row justify-between items-center w-full pl-2 pr-2 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={logo.src} alt={logo.alt} width={150} height={33} />
          </a>
        )}

        <div class="flex items-center gap-2">
          <a
            class="btn btn-circle btn-sm btn-ghost text-white"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" size={24} strokeWidth={0.4} />
          </a>
          <a
            class="btn btn-circle btn-sm btn-ghost text-white"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={24}
              strokeWidth={2}
              fill="none"
            />
          </a>
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      <div class="flex justify-center md:hidden w-full p-3 pt-0">
        <input
          class="bg-[#171413] pl-4 text-xs border border-white w-full h-[38px] hover:bg-white outline-0 rounded"
          type="text"
          placeholder="Busque por tipo de tecido, cor, etc."
        />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full pl-6 pr-6 h-[92px]">
        <div class="flex-none min-w-[25%] relative">
          <Searchbar searchbar={searchbar} />
        </div>
        <div class="flex-auto flex justify-center">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block pl-5"
            >
              <Image src={logo.src} alt={logo.alt} width={200} height={44} />
            </a>
          )}
        </div>
        <div class="flex-none min-w-[25%] flex items-center justify-end gap-2">
          <a
            class="btn btn-circle btn-sm btn-ghost text-white"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" size={24} strokeWidth={0.4} />
          </a>
          <a
            class="btn btn-circle btn-sm btn-ghost text-white"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={24}
              strokeWidth={2}
              fill="none"
            />
          </a>
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>
      <div class="hidden md:flex flex-row justify-center h-[35px]">
        {items.map((item) => <NavItem item={item} />)}
      </div>
    </>
  );
}

export default Navbar;
