"use client"
import Image from "next/image";
import Portrait from "/public/portrait.png";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
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

enum IconType {
  LinkedIn,
  Github,
  CV,
}

function Icon(type : IconType, css : string) {
  switch(type) {
    case IconType.LinkedIn:
      return ( <FaLinkedin className={"size-8 fill-slate-300 group-hover:fill-black transition-all " + css}/>)

    case IconType.Github:
      return ( <FaGithubSquare className={"size-8 fill-slate-300 group-hover:fill-black transition-all " + css}/>)

    case IconType.CV:
      return (
        <p className={"text-2xl font-bold text-slate-300 group-hover:text-black transition-all " + css}>
          CV
        </p>
      )
  }
}

function Tab(css : string, type : IconType, href : string, file : string = "", mobile : string = "") {
  const Content = () => {
    return (
      <div className={"group w-full h-full bg-slate-900 hover:bg-white transition-all flex justify-center items-center shadow-md " + css}>
        <div>
            {Icon(type, mobile)}
        </div>
      </div>
    )
  }

  if (href == "file") {
    return (
      <a href={file} target="_blank" rel="noopener noreferrer">
        {Content()}
      </a>
    )
  } else {
    return (
      <Link href={href}>
        {Content()}
      </Link>
    )
  }
}

function About() {
  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-[260px] flex flex-wrap justify-center items-center">

        {/* Text Box */}
        <div className="w-fit h-fit flex pr-7 pl-2">

          {/* Content */}
          <div className="w-[324px] h-fit">
            <p className="font-josefin text-slate-400 text-xl pl-[21px]">
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
          <div className="pl-8 grayscale">
            <Image
              className=" rounded-xl"
              src={Portrait}
              width={210}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>

        {/* Contacts Box */}
        <div className="space-y-6 pt-10 flex flex-col justify-center items-center">

          {/* Tabs */}
          <div className="w-[546px] h-[50px] grid grid-cols-3">
            {Tab("border-r-2 border-[#080f1a] rounded-l-xl", IconType.LinkedIn, "https://www.linkedin.com/in/mateuszsalaga/")}
            {Tab("",                                         IconType.Github, "https://github.com/Keochori")}
            {Tab("border-l-2 border-[#080f1a] rounded-r-xl", IconType.CV, "file", "/cv.pdf")}
          </div>
          
          {/* Mail Tab */}
          <div className="bg-slate-900 bg-opacity-50 w-fit flex justify-center items-center p-3 pt-4 rounded-xl space-x-2">
            <div className="pb-1">
              <MdOutlineMail className="size-5 fill-slate-300" />
            </div>
            <div>
              <p className="text-[18px] font-josefin text-slate-300">
                MatSalaga@hotmail.com
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
      <div className="w-full h-full flex flex-col justify-center pt-10">

        {/* LinkedIn */}
        <div className="h-[90px]">
          {Tab("border-t-2 border-[#080f1a]", IconType.LinkedIn, "https://www.linkedin.com/in/mateuszsalaga/", "", "[&&]:size-14")}
        </div>

        {/* Github */}
        <div className="h-[90px]">
          {Tab("border-t-2 border-[#080f1a]", IconType.Github, "https://github.com/Keochori", "", "[&&]:size-14")}
        </div>

        {/* CV */}
        <div className="h-[90px]">
          {Tab("border-t-2 border-[#080f1a]", IconType.CV, "file", "/cv.pdf", "[&&]:text-4xl")}
        </div>

        {/* Email */}
        <div className="w-full h-[90px] p-8 bg-slate-900 border-t-2 border-[#080f1a] flex justify-center items-center">
          <div className="pr-2 pb-[4px]">
            <MdOutlineMail className="size-8 fill-slate-300"/>
          </div>

          <div className="">
            <p className="text-xl font-josefin text-slate-300">
              MatSalaga@hotmail.com
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
