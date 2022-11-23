import { setTimeout } from "node:timers/promises"

export function TextComponent({parentName}: {parentName: string}) {
  console.log(`rendered from ${parentName}!!!`)
  return <p>
    hey!
  </p>
}










