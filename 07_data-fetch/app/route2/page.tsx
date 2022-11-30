import Link from "next/link";

export default async function DynamicPage() {
  return (
    <div>
      <p>this is route2</p>
      <Link href="/route1">go to route1</Link>
    </div>
  )
}
