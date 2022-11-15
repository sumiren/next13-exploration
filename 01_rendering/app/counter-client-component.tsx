"use client"

import {useState} from "react";

export default function CounterClientComponent() {
  const [ count, setCount ] = useState(0);

  return <div>
    <p>カウント：{count}</p>
    <button onClick={()=>setCount(count + 1)}>カウントアップ</button>
  </div>
}
