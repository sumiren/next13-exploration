import { setTimeout } from "node:timers/promises"

export default async function SlowServerComponent() {
  const res = await fetch("http://localhost:3001/api/hello", {
    cache: "no-store"
  })
  await setTimeout(10000);

  return <div>
    <p>slow server component</p>
  </div>
}










