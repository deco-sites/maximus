import Icon from "$store/components/ui/Icon.tsx";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item }: { item: INavItem }) {
  return (
    <div class="collapse collapse-plus">
      {item.children?.length
        ? (
          <>
            <input type="checkbox" />
            <div class="collapse-title text-xs uppercase after:text-lg">
              {item.label}
            </div>
          </>
        )
        : (
          <a class="collapse-title after:opacity-0" href={item.href}>
            <div class="text-xs uppercase">{item.label}</div>
          </a>
        )}

      <div class="collapse-content">
        <ul>
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
          <li>
            <a
              class="block px-4 underline text-sm uppercase font-bold"
              href={item.href}
            >
              Ver tudo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Menu({ items }: Props) {
  return (
    <div class="flex flex-col h-full bg-white">
      <ul class="px-2 flex-grow flex flex-col">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2">
        <li>
          <a
            class="flex items-center gap-4 px-4 py-4 border"
            href="https://www.deco.cx"
          >
            <Icon id="User" size={24} strokeWidth={2} />
            <span class="text-sm uppercase font-medium">Entrar/Cadastrar</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-4"
            href="/Institucional/contato"
          >
            <span class="text-sm font-medium">
              <strong>Dúvidas?</strong> Entre em contato
            </span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-4"
            href="/account#/orders"
          >
            <span class="text-sm font-medium">Meus pedidos</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-4"
            href="/Institucional/faq"
          >
            <span class="text-sm font-medium">Perguntas Frequentes</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
