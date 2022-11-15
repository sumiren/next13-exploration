import SlowServerComponent from "./slow-server-component";
import { Suspense } from "react";
import CounterClientComponent from "./counter-client-component";

export default function Home() {
  console.log("this is page.tsx");

  return (
    <div>
      <p>this is page.tsx</p>
      <Suspense fallback={<p>Loading big data...</p>}>
        { /* @ts-ignore */ }
        <SlowServerComponent/>
      </Suspense>
      <CounterClientComponent/>
    </div>
  )
}
