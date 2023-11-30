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

  const vtexProducts = await vcsDeprecated
    ["GET /api/catalog_system/pub/products/search/:term?"](query)
    .then((res) => res.json());

  return vtexProducts;
};

export default action;
