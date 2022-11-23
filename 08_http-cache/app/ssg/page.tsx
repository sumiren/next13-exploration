export default async function DynamicPage() {
  const res = await fetch("http://localhost:3001/api/hello1", {
    cache: "force-cache"
  })

  return (
    <div>
      <p>this is ssg</p>
      <p>res: {`${res.body}`}</p>
    </div>
  )
}
