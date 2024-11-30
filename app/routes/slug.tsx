import { Form, Link, useActionData } from "react-router";
import CurrentRoute from "~/welcome/CurrentRoute";
import { Route } from "./+types/slug";

export function loader() {
  return { data: "loaded" }
}

export function action({ request, params }: Route.ActionArgs) {
  return { data: "submitted to "+request.url };
}

export default function Home({ params }: Route.LoaderArgs) {
  const submitted = useActionData<typeof action>()
  return <div className="flex flex-col">
    <CurrentRoute />
    <p><Link to="..">Home</Link></p>
    <p>
      Slug: {params.slug}
      <Form method="post">
        <input type="hidden" value="value"></input>
        <button type="submit" className="p-1 bg-white/5">Submit</button>
      </Form>
      {submitted?.data}
    </p>
  </div>
}