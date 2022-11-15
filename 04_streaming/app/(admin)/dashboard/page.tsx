import Link from "next/link";
import { Suspense } from "react";
import SlowServerComponent from "../slow-server-component";

export const revalidate = 0;

export default function DashboardPage() {
  return (
    <>
      <div>
        <p>this is page.tsx</p>
        <Suspense fallback={<p>Loading big data...</p>}>
          { /* @ts-ignore */ }
          <SlowServerComponent/>
        </Suspense>
      </div>
    </>
  )
}
