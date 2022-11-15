import ParentClientComponent from "../parent-client-component";
import SlowServerComponent from "../slow-server-component";
import Link from "next/link";

export default function Home() {
  console.log("this is page.tsx");

  return (
    <div>
      <Link href="/">go to the page</Link>
    </div>
  )
}
