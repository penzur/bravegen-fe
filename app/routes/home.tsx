import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "description", content: "This is home page" },
  ];
}

export default function Home() {
  return <h1>Hello</h1>
}
