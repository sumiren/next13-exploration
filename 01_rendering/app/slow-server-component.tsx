import { setTimeout } from "node:timers/promises"

export default async function SlowServerComponent() {
  await setTimeout(10000);
  return <div>
    <p>slow server component</p>
  </div>
}










