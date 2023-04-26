import { Link } from "@remix-run/react";

export default function BlogContainer({
  text,
  überschrift,
  titel,
  name,
  input,
}: any) {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <div className="p-4 gap-2 mr-32 ml-32 mt-5 font-semibold border-2 border-black rounded-lg text-[20px]">
          <h1 className="text-[30px]">{überschrift}</h1>
          <div>{name}</div>
          <div>{titel}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}
