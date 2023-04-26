import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const { countryName } = params;
  const url = new URL(`https://restcountries.com/v3.1/name/${countryName}`);
  const response = await fetch(url);
  const data = await response.json();
  return json({ data: data[0] });
}

export default function Country() {
  const { data } = useLoaderData();

  return (
    <div>
      <ul>
        {data.borders.map((country: any, index: any) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
      <h1 className="mb-6 text-2xl">{data.name.common}</h1>
      <div className="flex w-full gap-2">
        <div className="flex w-1/2 flex-col items-start gap-2">
          <img src={data.flags.png} alt="Flat" className="h-12" />
          <p>
            <li>Population:</li> {data.population.toLocaleString()}
          </p>
          <p>
            <li>Official name:</li> {data.name.official}
          </p>
        </div>
        <div className="w-1/2">
          <iframe
            title="google-map"
            className="h-80 w-full"
            src={`https://www.google.com/maps/embed/v1/place?q=${data.name.common}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
