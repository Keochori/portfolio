import Image from "next/image";
import Portrait from "@/app/Images/portrait.png";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex justify-center items-center">

      {/* Full box */}
      <div className=" w-[600px] h-[500px] flex">

        {/* Text box */}
        <div className=" w-[450px] h-[300px]">
          <p className="font-josefin text-slate-400 text-xl pl-3">
            Hi! My name is Mateusz Salaga and I am a 22 year old video game
            programmer from sweden.
          </p>


          {/* Projects Link Text */}
          <p className="font-josefin text-slate-400 text-xl pt-8 pb-2 text-center">
            Feel free to check out my work!
          </p>
          <div className="flex justify-center">
            <Link
              className="transition-all font-josefin text-slate-300 text-xl border-2 border-slate-300 rounded-xl p-2 hover:text-[#979797] hover:border-[#979797]"
              href="../Pages/Projects"
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Image box */}
        <div className="px-10 grayscale">
          <Image
            className=" rounded-xl"
            src={Portrait}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
