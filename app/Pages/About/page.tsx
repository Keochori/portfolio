import Image from "next/image";
import Portrait from "@/app/Files/portrait.png";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

export default function About() {
  return (
    <div className="flex justify-center justify-center">
      <div className="w-[600px] h-[260px] flex flex-wrap justify-center items-center">

        {/* Info Tab */}
        <div className="w-[600px] h-[260px] flex">

          {/* Text box */}
          <div className=" w-[450px] h-[300px]">
            <p className="font-josefin text-slate-400 text-xl pl-3">
              Hi! My name is Mateusz Salaga and I am a 22 year old video game
              programmer from sweden.
            </p>


            {/* Projects Link Text */}
            <p className="font-josefin text-slate-400 text-xl pt-8 pb-3 text-center">
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

        {/* Other Tab */}
        <div className="w-[600px] h-[60px] flex">

          {/* Email */}
          <div className="w-[200px] h-[60px]  flex flex-wrap">
            <div className="w-full h-[30px] flex justify-center items-center">
              <MdOutlineMail className=" size-6 fill-[#d1c876]"/>
            </div>
            <div className="w-full h-[30px] flex justify-center">
              <p className="text-sm font-josefin text-[#979797]">
                MatSalaga@hotmail.com
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="w-[250px] h-[60px] flex flex-wrap">
            <div className="w-full h-[30px] flex justify-center items-center">
              <FaLinkedin className=" size-6 fill-[#d1c876]"/>
            </div>
            <div className="w-full h-[30px] flex justify-center">
              <Link className="text-sm font-josefin text-[#979797] hover:text-[#707070] transition-all" href={'https://www.linkedin.com/in/mateuszsalaga/'}>
                linkedin.com/in/mateuszsalaga
              </Link>
            </div>
          </div>

          {/* CV */}
          <div className="w-[110px] h-[60px]  flex flex-wrap">
            <div className="w-full h-[30px] flex justify-center items-center">
              <a href="../cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <p className="size-5 font-bold text-center text-[#d1c876]">
                  CV
                </p>
              </a>
            </div>
            <div className="w-full h-[30px] flex justify-center">
              <p className="text-sm font-josefin ">
                <a href="../cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm font-josefin text-[#979797] hover:text-[#707070] transition-all">
                    Click Here!
                  </p>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
