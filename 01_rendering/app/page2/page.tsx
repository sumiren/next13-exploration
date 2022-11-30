import Link from "next/link";
import {Button} from "./button";

export const revalidate = 0;

export default function Home() {
  console.log("this is page.tsx");
  if (Math.random() > 0.2) {
    throw new Error("hoge")
  }
  return (
    <div>
      <Link href="/">go to the page</Link>
      <Button/>
    </div>
  )
}
