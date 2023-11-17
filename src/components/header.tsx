import Image from "next/image"
import Link from "next/link"
import SiteNav from "./site-nav"
import Logo from "/src/app/assets/logo.png"


export default function Header() : React.ReactNode {
  return (
    <header className="flex justify-between items-center flex-row py-4 px-7 border-b">
      <Link href="/">
        <Image src={Logo} alt="logo" className="h-[35px] w-[35px]" width="100" height="100" />
      </Link>
      <SiteNav />
    </header>
  )
}