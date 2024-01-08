import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import type { Product, Suggestion } from "apps/commerce/types.ts";
import type { Image } from "deco-sites/std/components/types.ts";
import Alert from "$store/islands/Header/Alert.tsx";
import Contact from "./Contact.tsx";
import Navbar from "$store/islands/Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
  newTable?: boolean;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  /** @format html */
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: Product[] | null;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: Suggestion | null;

  /** @title Logo */
  logo?: { src: Image; alt: string };

  /** @title Logo Curto*/
  logoCurt?: { src: Image; alt: string };
}

function Header({
  alerts,
  searchbar: _searchbar,
  products,
  navItems = [],
  suggestions,
  logo,
  logoCurt,
}: Props) {
  const searchbar = { ..._searchbar, products, suggestions };

  return (
    <>
      <header class="sm:h-[106px] md:h-[189px]">
        <Drawers
          menu={{ items: navItems }}
          searchbar={searchbar}
          logo={logo}
        >
          <div class="bg-[#171413] fixed w-full z-50">
            <Alert alerts={alerts} />
            <Contact />
            <Navbar
              items={navItems}
              searchbar={searchbar}
              logo={logo}
              logoCurt={logoCurt}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
