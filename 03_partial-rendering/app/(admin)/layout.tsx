"use client"

import {useState} from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("re-rendered!")
  const [flag, setFlag] = useState(true)
  return (<div>
    <header style={{backgroundColor: "white", color:"black", display:"flex", justifyContent: "center", alignItems: "center", height: "48px"}}>
      This is very nice Admin layout!
      <button onClick={() => setFlag(!flag)}> change state to {`${flag}`}</button>
    </header>
    <div>
      {children}
    </div>
  </div>)
}
