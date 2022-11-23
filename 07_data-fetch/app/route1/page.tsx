export default async function DynamicPage() {
  const res = await fetch("http://localhost:3001/api/hello1"
  )
  const res2 = await fetch("http://localhost:3001/api/hello2")

  return (
    <div>
      <p>this is route1</p>
      <p>res: {`${res.body}`}</p>
      <p>res2: {`${res2.body}`}</p>
    </div>
  )
}

export const revalidate = 0
