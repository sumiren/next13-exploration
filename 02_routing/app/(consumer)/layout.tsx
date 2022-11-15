export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <header style={{backgroundColor: "white", color:"black", display:"flex", justifyContent: "center", alignItems: "center", height: "48px"}}>
          B2C
        </header>
        <main>
          {children}
        </main>
      </div>
  )
}
