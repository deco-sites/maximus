import BannerSchool from "./BannerSchool.tsx";
import Benefits from "./Benefits.tsx";
import BenefitsMobile from "./BenefitsMobile.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import Description from "./Description.tsx";
import Departaments from "./Departaments.tsx";
import Links from "./LinksFooter.tsx";
import Sociais from "./Sociais.tsx";
import Payments from "./Payments.tsx";
import Copyrigth from "./Copyrigth.tsx";

//import Combination from "$store/islands/Combination.tsx";
import Whatsapp from "./Whatsapp.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface bannerSchoolItem {
  image: LiveImage;
  title: string;
  text: string;
  link: string;
}

export interface benefitsItem {
  image: LiveImage;
  /** @format html */
  texto: string;
}

export interface sociaisItem {
  image: LiveImage;
  link?: string;
  size: number;
}

export interface PaymentsItem {
  image: LiveImage;
  size: number;
}

export interface SecurityItem {
  image: LiveImage;
  link?: string;
  width: number;
  height: number;
}

export interface link {
  link?: string;
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

export interface footerItemsI {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}

export interface Props {
  footerItems?: footerItemsI[];
  bannerSchool?: {
    title: string;
    text: string;
    itemsSchool: bannerSchoolItem[];
  };
  beneficios?: {
    items: benefitsItem[];
  };
  beneficiosMobile?: {
    items: benefitsItem[];
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  /** @format html */
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
  bannerSchool = {
    itemsSchool: [
      {
        image: "/arquivos/Influenciadora-da-costura-flag.jpg",
        title: "Influenciadora da Costura",
        text:
          "Aprenda a divulgar suas costuras de forma profissional nas redes sociais para valorizar o seu trabalho e conquistar mais clientes.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-de-redes-sociais-influenciadora-da-costura-ana-paula-mocelin?_gl=1*i8qwcv*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RUhpNCUyRlZQcVdwSmRZeTlNZ2ZMTUZrc1R4eW9xb0pmJTJGZ0d1ZDJ3dE1KSE5weUN4REdsa3dOdGxtY3lyazFLJTJGRWI5UWk3MG1QeHA1V2xTVmpjSnpja3ZWb3FJbFFkREJ3bTExaXJTS1NoZlo1a3VXcjYwVEpkOWJQeE5ueFVBJTNEJTNE",
      },
      {
        image: "/arquivos/Capas%20dos%20Cursos%20-%20FLAGS.jpg",
        title: "Ajustes e Consertos",
        text:
          "Aprenda a arte do ajuste e conserto de todos os tipos de roupas com Viviane Alves. Um dos cursos mais pedidos pelas alunas, agora na nossa Escola.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-costura-ajustes-consertos-de-roupas-viviane-alves?_gl=1*7qgfjh*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*bWo4Ynd3WGQ3WHVrZGF5bFJoM2ZJSUZheG5oZDhZblNlQmFyJTJCNWFjSE13cTFCJTJCS2Zod3puQU5wZVpNeHJ3bjJrTHFzdTlrWG10TXRxZjdob21yelVGOWlhZWh1aXB6ajRIaHRTZmxWbCUyRnVnNFBQeDNXRldlMVEyMnJWT3l3JTNEJTNE",
      },
      {
        image: "/arquivos/modaeestilo.png",
        title: "MOLDES MODA E ESTILO",
        text:
          "Faça sua Assinatura e Tenha Acesso Ilimitado à Maior e mais Confiável Biblioteca de Moldes de Costura do Brasil com a Curadoria da Modelista Marlene Mukai.",
        link:
          "https://materiais.maximustecidos.com.br/assinatura-online-moldes-moda-estilo-marlene-mukai?_gl=1*7qgfjh*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*bWo4Ynd3WGQ3WHVrZGF5bFJoM2ZJSUZheG5oZDhZblNlQmFyJTJCNWFjSE13cTFCJTJCS2Zod3puQU5wZVpNeHJ3bjJrTHFzdTlrWG10TXRxZjdob21yelVGOWlhZWh1aXB6ajRIaHRTZmxWbCUyRnVnNFBQeDNXRldlMVEyMnJWT3l3JTNEJTNE",
      },
      {
        image: "/arquivos/Curso-costura-online-flag.jpg",
        title: "Costura de Sucesso",
        text:
          "Aprenda a costurar toda e qualquer peça de roupa do absoluto zero, seja por hobby, terapia, ou para literalmente viver de costuras!",
        link:
          "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-de-sucesso-nea-santtana?_gl=1*vl4lwz*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Modelagem-flag.jpg",
        title: "Modelista Profissional",
        text:
          "Aprenda Modelar as principais peças de roupas femininas estudando com a lenda viva da Modelagem Plana no Brasil.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-modelista-profissional-marlene-mukai?_gl=1*vl4lwz*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Modelagem-malhas-flag.jpg",
        title: "Modelagem de Malhas",
        text:
          "Perca o medo da Modelagem e aprenda a fazer as principais peças de malha estudando com Marlene Mukai.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-modelagem-profissional-de-malhas-marlene-mukai?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Costura-infantil-%20flag.jpg",
        title: "Costura Infantil",
        text:
          "Aprenda costurar roupas infantis e enxovais para seus filhos e netos e ganhe dinheiro num dos ramos mais lucrativos da costura;",
        link:
          "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-infantil-clara-calui?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Costura-criativa-flag.jpg",
        title: "Costura Criativa",
        text:
          "Aprenda a costurar as peças mais pedidas e lucrativas da Costura Criativa com Menino Costureiro, o Fenômeno da Costura na Internet.",
        link:
          "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-criativa-menino-costureiro?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Costura-Pet-flag.jpg",
        title: "Costura Pet",
        text:
          'Aprenda costurar roupinhas para seus "filhos de 4 patas" e lucre com o nicho de costura que mais cresce no Brasil!',
        link:
          "https://materiais.maximustecidos.com.br/curso-de-costura-online-costura-pet-aury-moda-pet?_gl=1*1cq1tin*_ga*MzgyMjYzODQ2LjE2OTg3MDc2MzM.*_ga_HGM4SXF2FQ*MTcwMDc3MDExNS40NS4xLjE3MDA3NzA1NzAuMC4wLjA.*_fplc*RG4xdXRTdzRpM2MxNVRCRkNJUUVra1IwU3d4c2NqZHAzdndpSFhEeFVyY2w3RE54R0lDZUlnUHo1VlF0dUclMkZwZmVBallrWFhFRjBrUkRpY0l4TzNYbyUyQlRKaGM0JTJGUWwlMkJJUWx3YjREeTloN0M5NkNnZlIlMkJNSW9pWERrRkJ6USUzRCUzRA..",
      },
      {
        image: "/arquivos/Bordado-a-mão-flag.jpg",
        title: "Arte do Bordado à mão",
        text:
          "Aprenda a bordar desde os pontos mais simples até desenhos inteiros, mesmo que nunca tenha bordado antes.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-arte-do-bordado-fernanda-nadal?_gl=1*y5d03a*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
      },
      {
        image: "/arquivos/bordadoluneville.jpg",
        title: "Bordado Luneville",
        text:
          "Aprenda a bordar rendas sofisticadas e peças luxuosas utilizando a mesma técnica artesanal de roupas da Alta Costura.",
        link:
          "https://materiais.maximustecidos.com.br/curso-online-bordado-luneville-fernanda-nadal?_gl=1*8n9egc*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
      },
      {
        image: "/arquivos/Estilista-de-fato-flag.jpg",
        title: "Estilista de Fato",
        text:
          "Aprenda Desenho de Moda com um método simples e seja valorizada no mercado da Costura como um (a) Estilista de Fato!",
        link:
          "https://materiais.maximustecidos.com.br/curso-de-desenho-de-moda-online-estilista-de-fato-valmir-pazeto?_gl=1*8n9egc*_ga*MTIyNDExNTQwNi4xNjk3NzI1MzMy*_ga_HGM4SXF2FQ*MTcwNDcyODM4Mi40MS4wLjE3MDQ3MjgzODIuMC4wLjA.",
      },
    ],
  },
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
  beneficiosMobile = {
    items: [
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-truck-mob.png?v=638043861321970000",
        texto:
          "<strong>Frete grátis</strong> para todo o Brasil. <strong>*consulte condições</strong>",
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-credit-card.png?v=637966970343030000",
        texto:
          "Pague em até <strong>3x sem juros</strong> no cartão (5% de desconto no pix).",
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-security-mob.png?v=637966970348030000",
        texto:
          "Loja <strong>100% Segura!</strong> Mais de 90mil clientes satisfeitos",
      },
      {
        image:
          "https://tfcszo.vteximg.com.br/arquivos/icon-whats-mob.png?v=637966970348030000",
        texto:
          "<a href='https://api.whatsapp.com/send?phone=5545999110056' target='_blank'>WhastApp Maximus De seg a sex 09:00 às 18:00 horas</a>",
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
      "Maximus Comércio de Tecidos Eireli <br> CNPJ: 02.449.665/0001-02 <br> Av Maripá, 4846, Centro, Toledo/PR, Cep: 85901-000",
    texto3: "Copyright ©2022 - Todos os Direitos Reservados à Maximus Tecidos",
  },
  footerItems = [
    {
      label: "label 1",
      href: "##",
      children: [
        {
          label: "label 2",
          href: "href 2"
        }
      ]
    },
    {
      label: "label 2",
      href: "##",
      children: [
        {
          label: "label 3",
          href: "href 3"
        }
      ]
    }
  ]
}: Props) {
  return (
    <footer
      class={`w-full flex flex-col`}
    >
      <BannerSchool content={bannerSchool} />
      <Benefits content={beneficios} />
      <Newsletter content={newsletter} />
      <Description description={description} />
      <Departaments content={footerItems} />
      <BenefitsMobile content={beneficiosMobile} />
      <Links content={links} />
      <Sociais content={sociais} />
      <Payments payments={payments} security={security} />
      <Copyrigth copyrigth={copyrigth} />
      <Whatsapp />
      {/* <Combination /> */}
    </footer>
  );
}

export default Footer;
