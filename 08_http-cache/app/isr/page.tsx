export default async function DynamicPage() {
  const res = await fetch("http://localhost:3001/api/hello1", {
    next: { revalidate: 37 }
  })
  const res2 = await fetch("http://localhost:3001/api/hello2", {
    next: { revalidate: 73 }
  })

  return (
    <div>
      <p>this is isr</p>
      <p>res: {`${res.body}`}</p>
      <p>res: {`${res2.body}`}</p>
    </div>
  )
}
