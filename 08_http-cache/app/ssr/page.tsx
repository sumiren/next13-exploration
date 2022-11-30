export default async function DynamicPage() {
  const res = await fetch("http://localhost:3001/api/hello1", {
    cache: 'no-store'
  })

  return (
    <div>
      <p>this is ssr</p>
      <p>res: {`${res.body}`}</p>
    </div>
  )
}
