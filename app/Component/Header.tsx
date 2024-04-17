import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-#1e293b p-10">

      {/* Header Text */}
      <h1 className="font-josefin font-normal text-4xl text-white flex justify-center items-center">
        Mateusz Salaga
      </h1>

      <div className="flex justify-center items-center py-8">

        {/* Projects button */}
        <Link
          href="../Pages/Projects"
          className="text-xl px-7 text-[#dbdbdb] font-josefin font-light hover:text-[#979797] hover:tracking-wider transition-all"
        >
          Projects
        </Link>

        {/* About button */}
        <Link
          href="../Pages/About"
          className="text-xl px-7 text-[#dbdbdb] font-josefin font-light hover:text-[#979797] hover:tracking-wider transition-all"
        >
          About
        </Link>

      </div>
    </div>
  );
}
