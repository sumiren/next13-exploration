import { Suspense } from "react";
import SlowServerComponent from "../slow-server-component";

export default async function StaticRenderingPage() {
  const res = await fetch("http://localhost:3001/api/hello", {
    cache: "no-cache"
  })

  return (
    <>
      <div>
        <p>this is page.tsx</p>
        <Suspense fallback={<p>Loading big data...</p>}>
          { /* @ts-ignore */ }
          <SlowServerComponent/>
        </Suspense>
      </div>
    </>
  )
}
