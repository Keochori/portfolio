"use client"
import Image from "next/image";
import Portrait from "@/app/Files/portrait.png";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function AboutPage() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1150px)' })
  if (isTabletOrMobile == true) {
    return AboutMobile();
  } else {
    return About();
  }
}

function About() {
  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-[260px] flex flex-wrap justify-center items-center">

        {/* Text Box */}
        <div className="w-[600px] h-[260px] flex">

          {/* Content */}
          <div className=" w-[450px] h-[300px]">
            <p className="font-josefin text-slate-400 text-xl pl-3">
              Hi! My name is Mateusz Salaga and I am a 22 year old video game
              programmer from sweden.
            </p>


            {/* Projects Link */}
            <p className="font-josefin text-slate-400 text-xl pt-8 pb-3 text-center">
              Feel free to check out my work!
            </p>
            <div className="flex justify-center">
              <Link
                className="bg-[#131a25] transition-all font-josefin text-slate-300 text-xl border-2 border-[#1e293b] rounded-xl p-2 pl-8 pr-8 hover:text-black hover:bg-white hover:border-[#1e293b]"
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

        {/* Contacts Box */}
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
              <Link href={'https://www.linkedin.com/in/mateuszsalaga/'}>
                <FaLinkedin className=" size-6 fill-[#d1c876] hover:fill-[#a39c5c]"/>
              </Link>
            </div>
            <div className="w-full h-[30px] flex justify-center">
              <Link className="text-decoration-line: underline text-sm font-josefin text-[#979797] hover:text-[#707070] transition-all" href={'https://www.linkedin.com/in/mateuszsalaga/'}>
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
                <p className="size-5 font-bold text-center text-[#d1c876] hover:text-[#a39c5c]">
                  CV
                </p>
              </a>
            </div>
            <div className="w-full h-[30px] flex justify-center">
              <p className="text-sm font-josefin ">
                <a href="../cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-line: underline text-sm font-josefin text-[#979797] hover:text-[#707070] transition-all"
                >
                    Click Here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutMobile() {
  return (
    <div className="w-full h-fit flex flex-wrap justify-center">
      <div className="w-8/12 h-fit flex flex-col">

        {/* Portrait */}
        <div className="w-full h-fill flex justify-center">
            <Image
              className=" rounded-xl grayscale"
              src={Portrait}
              width={300}
              height={300}
              alt="Picture of the author"
            />
        </div>

        {/* Content */}
        <div className="w-full h-fit flex justify-center pt-8">
          <div className="w-11/12 h-fit">
            <p className="font-josefin text-slate-400 text-xl text-center">
              Hi! My name is Mateusz Salaga and I am a 22 year old video game
              programmer from sweden.
            </p>

            {/* Projects Link */}
            <p className="font-josefin text-slate-400 text-xl pt-8 pb-3 text-center">
              Feel free to check out my work!
            </p>
            <div className="flex justify-center">
              <Link
                className="bg-[#131a25] transition-all font-josefin text-slate-300 text-xl border-2 border-[#1e293b] rounded-xl p-2 pl-8 pr-8 hover:text-black hover:bg-white hover:border-[#1e293b]"
                href="../Pages/Projects"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Contacts Box */}
      <div className="w-full h-full flex flex-wrap justify-center pt-10">

        {/* Email */}
        <div className="w-full h-fit p-8 bg-slate-900 border-t border-slate-800">
          <div className="flex justify-center">
            <MdOutlineMail className="size-12 fill-[#d1c876]"/>
          </div>

          <div className="flex justify-center">
            <p className="text-xl font-josefin text-[#979797]">
              MatSalaga@hotmail.com
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="w-full h-fit flex justify-center p-8 bg-slate-900 border-t border-slate-800">
            <Link href={'https://www.linkedin.com/in/mateuszsalaga/'}>
              <FaLinkedin className=" size-20 fill-[#d1c876] hover:fill-[#a39c5c]"/>
            </Link>
        </div>

        {/* CV */}
        <div className="w-full h-fit p-8 bg-slate-900 border-t border-b border-slate-800">
          <a  className="flex items-center justify-center"
              href="../cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            <p className="text-6xl font-bold text-[#d1c876] hover:text-[#a39c5c]">
              CV
            </p>
          </a>
        </div>

      </div>

    </div>
  );
}
