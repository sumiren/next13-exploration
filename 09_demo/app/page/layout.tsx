import {Button} from "./button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("re-rendered!")
  return (<div>
    <header style={{backgroundColor: "white", color:"black", display:"flex", justifyContent: "center", alignItems: "center", height: "64px"}}>
      <p style={{marginRight: "20px"}}>
        this is header
      </p>
      { /* @ts-ignore */ }
      <Button></Button>
    </header>
    <div>
      {children}
    </div>
    <footer style={{height: "48px",display:"flex", justifyContent: "center", borderTop: "1px solid white", alignItems: "center", fontSize: "20px" }}>this is footer</footer>
  </div>)
}
