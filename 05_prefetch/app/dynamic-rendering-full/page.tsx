import {cookies} from "next/headers";

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function DynamicRenderingPage() {
  console.log("dynamic rendering full!")
  return (
    <>
      <div>
        <p>this is dynamic rendering page</p>
      </div>
    </>
  )
}
