import type { SectionProps } from "$live/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
}

export async function loader(
  { title }: Props,
  _req: Request,
) {
  const data: any = await fetch(
    "https://tfcszo.myvtex.com/api/catalog_system/pub/category/tree/3",
  ).then(
    (r) => {
      if (r.ok) {
        console.log("data>>>>>>>", r.clone().json());
        return r.clone().json();
      }
    },
  );

  return { title, data };
}

export default function Categories(
  { title, data }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">regiscuba == {title}</h1>
      <ul>
        {data && data.map((item: any) => <li>{item.name}</li>)}
      </ul>
    </div>
  );
}
