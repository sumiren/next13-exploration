"use client"

import {useRef, useState} from "react";

export function Button()  {
  const [message, setMessage] = useState("label")
  const ref = useRef<HTMLInputElement>(null);

  return <div>
    <input type="text" ref={ref}/>
    <button onClick={()=> {
      if (Math.random() > 0.2) {
        throw new Error("hoge")
      }
      setMessage(ref.current!.value);
    }}>copy to label</button>
    <span>{message}</span>
  </div>
}
