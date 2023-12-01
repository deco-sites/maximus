import { useState } from "preact/hooks";

import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
//import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
//import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { PLATFORM } from "$store/platform.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import Login from "./Login.tsx";
import { navbarHeight } from "./constants.ts";

import Searchh from "$store/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, logo, logoCurt }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  logo?: { src: string; alt: string };
  logoCurt?: { src: string; alt: string };
}) {
  const [showLogo, setShowLogo] = useState(false);

  const window_ = window;

  window_.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  });

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
            <Image src={logo.src} alt={logo.alt} title={logo.alt} width={150} height={33} />
          </a>
        )}

        <div class="flex items-center gap-2">
          <Login/>
          <a
            class="btn btn-circle btn-sm btn-ghost hover:bg-[#171413] text-white"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <img src="/arquivos/icone-wishlist.svg" alt="icone wishlist" title="icone wishlist" />
          </a>
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      <div class="flex justify-center md:hidden w-full p-3 pt-0">
        <Searchh />
      </div>

      {/* Desktop Version */}
      <div class="w-full max-w-[1246px] mr-auto ml-auto hidden md:flex flex-row justify-between items-center pl-6 pr-6 h-[92px]">
        <div class="flex-none min-w-[25%] relative">
          {/*<Searchbar searchbar={searchbar} />*/}
          <Searchh />
        </div>
        <div class="flex-auto flex justify-center">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block pl-5"
            >
              <Image
                src={showLogo && logoCurt ? logoCurt.src : logo.src}
                alt={logo.alt}
                title={logo.alt}
                width={showLogo ? 46 : 200}
                height={44}
              />
            </a>
          )}
        </div>
        <div class="flex-none min-w-[25%] flex items-center justify-end gap-4">
         <Login/>
          <a
            class="btn btn-circle btn-sm btn-ghost hover:bg-[#171413] text-white"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <img src="/arquivos/icone-wishlist.svg" alt="icone wishlist" title="icone wishlist" />
          </a>
          {PLATFORM === "vtex" && <CartButtonVTEX />}
          {PLATFORM === "vnda" && <CartButtonVDNA />}
        </div>
      </div>
      <div class="hidden md:flex flex-row justify-center h-[35px]">
        {items.map((item) => <NavItem item={item} showLogo={showLogo} />)}
      </div>
    </>
  );
}

export default Navbar;
