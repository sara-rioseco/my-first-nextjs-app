import Link from "next/link"
export default function SiteNav() {
  return (
    <div className="flex flex-row flex-no-wrap gap-x-5">
      <Link href="/">
        <h1> Home </h1>
      </Link>
      <Link href="/manga">
        <h1> Manga </h1>
      </Link>
    </div>
  )
}