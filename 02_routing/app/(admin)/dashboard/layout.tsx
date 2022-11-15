export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <div style={{display:"flex", height: "3000px"}}>
        <aside style={{backgroundColor: "white", color:"black", width:"20%", borderTop: "1px solid silver"}}>
          side bar
        </aside>
        <div style={{width: "80%"}}>
          {children}
        </div>
        </div>
      </div>
  )
}
