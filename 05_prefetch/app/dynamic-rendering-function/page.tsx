import {cookies} from "next/headers";

export default async function DynamicRenderingPage() {
  const cookie = cookies()

  return (
    <>
      <div>
        <p>this is dynamic rendering page</p>
      </div>
    </>
  )
}
