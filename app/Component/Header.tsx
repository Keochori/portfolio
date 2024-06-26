'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function GetProjectsButton() {
  const clicked = <Link href="/Projects" className="underline underline-offset-2 text-xl px-7 text-[#ffffff] font-josefin font-light hover:text-[#b6b6b6] hover:tracking-wider transition-all">Projects</Link>
  const unclicked = <Link href="/Projects" className="text-xl px-7 text-[#ffffff] font-josefin font-light hover:text-[#b6b6b6] hover:tracking-wider transition-all">Projects</Link>

  if (usePathname() == ('/Projects')) {
    return clicked;
  } else {
    return unclicked;
  }
}

function GetAboutButton() {
  const clicked = <Link href="/" className="underline underline-offset-2 brightness-100 text-xl px-7 text-[#ffffff] font-josefin font-light hover:text-[#b6b6b6] hover:tracking-wider transition-all">About</Link>
  const unclicked = <Link href="/" className="text-xl px-7 text-[#ffffff] font-josefin font-light hover:text-[#b6b6b6] hover:tracking-wider transition-all">About</Link>

  if (usePathname() == ('/')) {
    return clicked;
  } else {
    return unclicked;
  }
}

export default function Header() {
  return (
    <div className="bg-#1e293b p-10">

      {/* Header Text */}
      <h1 className="font-josefin font-normal text-4xl text-white flex justify-center items-center">
        <Link href="/">
          <p className="hover:text-[#e4e4e4]">
            Mateusz Salaga
          </p>
        </Link>
      </h1>

      <div className="flex justify-center items-center py-8">

        {/* Projects button */}
        <div className="w-[120px] h-fit flex justify-center">
          {GetProjectsButton()}
        </div>

        {/* About button */}
        <div className="w-[120px] h-fit flex justify-center pr-2">
          {GetAboutButton()}
        </div>

      </div>
    </div>
  );
}
