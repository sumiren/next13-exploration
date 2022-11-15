import { Suspense } from "react";

export default async function DynamicRenderingPage() {
  const res = await fetch("http://localhost:3001/api/hello", {
    cache: "no-store"
  })

  return (
  <>
    <div>
      <p>this is static rendering page</p>
    </div>
  </>);
}
