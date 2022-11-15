export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header style={{backgroundColor: "white", color:"black", display:"flex", justifyContent: "center", alignItems: "center", height: "48px"}}>
        Admin
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}
