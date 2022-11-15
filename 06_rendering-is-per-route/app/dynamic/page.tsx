import Link from "next/link";
import { TextComponent } from "../text-component";

export default async function DynamicPage() {
  const res = fetch("http://localhost:3001/api/hello", {
    cache: "no-store"
  })

  return (
    <div>
      <p>this is dynamic page</p>
      <TextComponent parentName="dynamic"></TextComponent>
    </div>
  )
}
