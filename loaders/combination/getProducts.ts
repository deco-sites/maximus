import { AppContext } from "$live/mod.ts";

export interface Props {
  query: string;
}

const action = async (
  { query }: Props,
  _req: Request,
  ctx: AppContext,
): Promise<void> => {
  const { vcsDeprecated } = ctx;

  console.log("entrou");

  const data =
    await vcsDeprecated[
      `https://www.maximustecidos.com.br/api/catalog_system/pub/products/search/?${query}`
    ];
  return data;
};

export default action;
