import { Suspense } from "react";

export default async function StaticRenderingPage() {
  const res = await fetch("http://localhost:3001/api/hello")

  return (
    <>
      <div>
        <p>this is static rendering page</p>
      </div>
    </>
  )
}
