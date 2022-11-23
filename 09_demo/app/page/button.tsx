"use client"

import {useState} from "react";

export function Button() {
  const [flag, setFlag] = useState(true)
  return (
    <button onClick={() => setFlag(!flag)} style={{backgroundColor: `${flag ? "blue" : "red" }`, border: "none", padding: "4px 8px", fontSize: "24px"}}> toggleButton</button>
  )
}
