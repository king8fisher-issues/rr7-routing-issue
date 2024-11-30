import { Link } from "react-router";
import CurrentRoute from "~/welcome/CurrentRoute";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function action({request, params}: Route.ActionArgs) {
  console.log("/ is hit")
  return null;
}

export default function Home() {
  return <div className="flex flex-col">
    <CurrentRoute />
    <Link to={encodeURIComponent("#routeWithHashTag")}>#routeWithHashTag</Link>
    <Link to={encodeURIComponent("routeWithoutHashTag")}>routeWithoutHashTag</Link>
  </div>;
}
