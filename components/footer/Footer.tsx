import Benefits from "./Benefits.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import Description from "./Description.tsx";
import Departaments from "./Departaments.tsx";
import Links from "./LinksFooter.tsx";
import Sociais from "./Sociais.tsx";
import Payments from "./Payments.tsx";
import Copyrigth from "./Copyrigth.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface benefitsItem {
  image: LiveImage;
  /** @format html */
  texto: string;
}

export interface sociaisItem {
  image: LiveImage;
  link: string;
  size: number;
}

export interface PaymentsItem {
  image: LiveImage;
  size: number;
}

export interface SecurityItem {
  image: LiveImage;
  link: string;
  width: number;
  height: number;
}

export interface link {
  link: string;
  text: string;
}

export interface linkItem {
  title: string;
  items: link[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  beneficios?: {
    items: benefitsItem[];
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  description: string;
  sociais?: {
    items: sociaisItem[];
  };
  links?: linkItem[];
  payments?: {
    items: PaymentsItem[];
  };
  security?: {
    items: SecurityItem[];
  };
  copyrigth?: {
    texto1: string;
    texto2?: string;
    texto3?: string;
  };
}

function Footer({ 
  beneficios = {
    items: [
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/secure2.png?v=638043861321970000",
        texto: "Loja <strong>100% Segura!</strong> Somos a maior do Brasil!",
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/Credit-card@2x.png?v=637966970343030000",
        texto:
          "Pague em até <strong>3x sem</strong> <strong>juros</strong> no cartão ou <strong>5% desconto no pix</strong>",
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/truck@2x.png?v=637966970348030000",
        texto:
          "<strong>Frete grátis</strong> para todo o Brasil. <strong>*consulte condições</strong>",
      },
    ],
  },
  newsletter = {
    title: "Newsletter",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  description =
    "A Maximus Tecidos é uma empresa apaixonada por <a class='text-[#2980b9] underline' href='https://www.maximustecidos.com.br/tecidos'>tecidos</a> de alta qualidade e pela arte da costura. Além de oferecermos uma ampla variedade de tecidos, , também fornecemos recursos educacionais, como ,  e , para inspirar e ensinar nossos clientes a criarem peças únicas. Além disso, a Maximus Tecidos oferece  ministrados por profissionais experientes. Com essa missão, nós buscamos manter viva a tradição da costura e incentivar as pessoas a explorar sua criatividade no mundo da moda e da costura.",

  links = [
    {
      title: "Sobre nós",
      items: [
        {
          link: "/sobre-nos",
          text: "Conheça a Maximus",
        },
        {
          link: "/Institucional/onde-estamos",
          text: "Onde Estamos",
        },
        {
          link: "/Institucional/faq",
          text: "FAQ",
        },
        {
          link: "/Institucional/condicoes-de-uso",
          text: "Condições de Uso",
        },
        {
          link: "/Institucional/politicas-de-privacidade",
          text: "Políticas de Privacidade",
        },
        {
          link: "/Institucional/frete-gratis",
          text: "Políticas de Frete Grátis",
        },
      ],
    },
    {
      title: "Atenção ao cliente",
      items: [
        {
          link: "/Institucional/contato",
          text: "Fale Conosco",
        },
        {
          link: "/desenho-gratuito",
          text: "Desenho Gratuito",
        },
        {
          link: "/Institucional/tabela-de-medidas",
          text: "Tabela de medidas",
        },
        {
          link: "/dicionario-de-tecidos",
          text: "Dicionário de Tecidos",
        },
        {
          link: "/Institucional/como-comprar",
          text: "Como Comprar",
        },
        {
          link: "/cuidados-com-tecidos",
          text: "Cuidados com Tecidos",
        },
        {
          link: "/cuidados-com-tecidos",
          text: "Cuidados com Tecidos",
        },
        {
          link: "/Institucional/trocas-e-devolucoes",
          text: "Troca e Devolução",
        },
        {
          link: "/clube-da-costureira",
          text: "Clube da Costureira",
        },
        {
          link: "/desconto-estudante",
          text: "Desconto do Estudante",
        },
      ],
    },
    {
      title: "Minha Conta",
      items: [
        {
          link: "/_secure/account#/orders",
          text: "Meus pedidos",
        },
        {
          link: "/_secure/account",
          text: "Meus dados",
        },
        {
          link: "/_secure/account",
          text: "Meu Perfil",
        },
      ],
    },
  ],
  sociais = {
    items: [
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-facebook-social.svg?v=637966970358830000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 13,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-insta-social.svg?v=637966970360230000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 20,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-youtube-social.svg?v=637966970372130000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 25,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-pinterest-social.svg?v=637966970364470000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 17,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-spotify-social.svg?v=637966970366200000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 22,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-telegram-social.svg?v=637966970367600000",
        link: "https://www.facebook.com/maximustecidosfinos",
        size: 20,
      },
    ],
  },
  payments = {
    items: [
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-encrypt.svg?v=637966973679400000",
        size: 64,
      },
      {
        image:
          "https://service.yourviews.com.br/Image/ae97f62a-00ed-4eb7-8fbf-024f90f5ff8a/Footer.jpg",
        size: 88,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-google.svg?v=637966973680800000",
        size: 158,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-pci.png?v=637979317453500000",
        size: 100,
      },
      {
        image: "https://tfcszo.vteximg.com.br/arquivos/selo-google.png",
        size: 168,
      },
    ],
  },
  security = {
    items: [
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-encrypt.svg?v=637966973679400000",
        link: "#",
        width: 64,
        height: 50,
      },
      {
        image:
          "https://service.yourviews.com.br/Image/ae97f62a-00ed-4eb7-8fbf-024f90f5ff8a/Footer.jpg",
        link: "https://www.lojaconfiavel.com/maximustecidos",
        width: 88,
        height: 90,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-google.svg?v=637966973680800000",
        link:
          "https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.maximustecidos.com.br%2Fhl=pt_BR",
        width: 158,
        height: 45,
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/logo-pci.png?v=637979317453500000",
        link: "https://secure.vtex.com/?an=tfcszo",
        width: 100,
        height: 62,
      },
      {
        image: "https://tfcszo.vteximg.com.br/arquivos/selo-google.png",
        link:
          "https://www.google.com/shopping/ratings/account/metrics?q=maximustecidos.com.br&c=BR&v=19&hl=pt_BR",
        width: 168,
        height: 55,
      },
    ],
  },
  copyrigth = {
    texto1:
      "As fotos aqui veiculadas, logotipo e marca são de propriedade do site www.maximustecidos.com.br. É vetada a sua reprodução, total ou parcial, sem a expressa autorização da administradora do site. Preços e condições de pagamento apresentados neste 'site' somente são válidos para as compras efetuadas no ato da sua exibição.",
    texto2:
      "Maximus Comércio de Tecidos Eireli CNPJ: 02.449.665/0001-02 Av Maripá, 4846, Centro, Toledo/PR, Cep: 85901-000",
    texto3: "Copyright ©2022 - Todos os Direitos Reservados à Maximus Tecidos",
  },
}: Props) {
  return (
    <footer
      class={`w-full flex flex-col`}
    >     
      <Benefits content={beneficios} />
      <Newsletter content={newsletter} />
      <Description description={description} />
      <Departaments />
      <Links content={links} />
      <Sociais content={sociais} />
      <Payments payments={payments} security={security} />
      <Copyrigth copyrigth={copyrigth} />
    </footer>
  );
}

export default Footer;
