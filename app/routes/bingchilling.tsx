import { ActionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Blogs from "~/components/BlogContainer";
import Button from "~/components/Button";
import supabase from "utils/supabase";
import BlogContainer from "~/components/BlogContainer";

export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("searchbar");

  if (search) {
    const { data } = await supabase
      .from("bingchilling")
      .select()
      .ilike("titel", `%${search}%$`);
    return { data };
  }

  const { data, error } = await supabase.from("bingchilling").select();
  return { data };
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const titel = formData.get("titel");
  const text = formData.get("text");
  await supabase.from("bingchilling").insert([{ name, titel, text }]);

  return {};
}
export default function Bingchilling() {
  const { data } = useLoaderData();
  return (
    <div>
      <Form method="post">
        <div className="flex flex-col gap-3 m-3 max-w-xl">
          <div>
            <input className="border-2 border-black rounded-lg" type="date" />
          </div>
          <div>
            <input
              className="border-2 border-black rounded-lg w-1/2"
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-2 border-black rounded-lg w-1/2"
              type="text"
              name="titel"
              placeholder="Titel"
            />
          </div>
          <div>
            <textarea
              className="w-full border-2 border-black rounded-lg"
              name="text"
              cols={5}
            ></textarea>
          </div>
          <button>Save changes</button>
        </div>
      </Form>
      <Form method="get">
        <input type="text" name="searchbar" placeholder="bingchilling" />
        <button>search</button>
      </Form>
      {data.map((bingchilling: any, index: any) => (
        <BlogContainer
          key={index}
          name={bingchilling.name}
          titel={bingchilling.titel}
          text={bingchilling.text}
        />
      ))}
    </div>
  );
}
