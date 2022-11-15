'use client';

import ChildServerComponent from "./child-server-component";

export default function ParentClientComponent() {
  console.log("this is client component");

  return (
    <div>
      this is client component
      <ChildServerComponent></ChildServerComponent>
    </div>
  )
}
