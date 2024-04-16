import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-#1e293b p-10">
      <h1 className="font-mono text-3xl text-white flex justify-center items-center">Mateusz Salaga</h1>

      <div className="flex justify-center items-center py-8">
        <Link href="../Pages/Projects" className="px-7 text-white font-mono">Projects</Link>
        <Link href="../Pages/About" className="px-7 text-white font-mono">About</Link>
      </div>
    </div>
  );
}
