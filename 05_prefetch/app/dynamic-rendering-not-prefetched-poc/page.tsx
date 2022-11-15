export default async function DynamicRenderingPage() {
  const data = fetch("http://localhost:3001/api/hello", {
    cache: "no-store"
  })
  return (
    <>
      <div>
        {
          [...new Array(1000)].map(() => {
            console.log("rendering!!!")
            return <p>this is dynamic rendering page</p>
          })
        }
      </div>
    </>
  )
}
