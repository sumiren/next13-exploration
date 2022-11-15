import Link from "next/link";

export default async function RootPage() {
  const links = [
    "static-rendering",
    "static-rendering-full",
    "static-rendering-fetch-cache",
    "static-rendering-fetch-revalidate",
    "static-rendering-streaming",
    "dynamic-rendering-fetch",
    "dynamic-rendering-function",
    "dynamic-rendering-full",
    "dynamic-rendering-streaming",
    "dynamic-rendering-not-prefetched-poc"
  ]
  return (
    <>
      {links.map((l) =>
        <div><Link href={l} prefetch={true}>go to {l}</Link></div>
      )}
    </>
  )
}
