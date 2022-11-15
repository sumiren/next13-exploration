import Link from "next/link";
import { TextComponent } from "../text-component";

export const dynamic = 'force-dynamic'

export default async function StaticPage() {
  const res = fetch("http://localhost:3001/api/hello")

  return (
    <div>
      <p>this is static page</p>
      <TextComponent parentName="static"></TextComponent>
    </div>
  )
}
