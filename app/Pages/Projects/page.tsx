"use client"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';


function Tab(clr : string, image : string, title : string, alt : string, content : string, last : string = "") {
  
  return (
    <Link href="">
      <div className={"flex flex-row w-full h-[200px] hover:h-[210px] transition-all overflow-hidden grayscale border-t border-[#979797] hover:grayscale-0 " + last}>
        
        {/* Image */}
        <div className="h-full w-[300px]">
          <CldImage
            width="300"
            height="250"
            src={image}
            sizes="100vw"
            crop={{
              width:"1100",
              height:"800",
              type: "auto"
            }}
            alt=""
          />
        </div>

        {/* Text */}
        <div className="bg-opacity-5 bg-slate-400 h-full w-[450px] flex flex-col items-center justify-center p-8">
          <div className="">
            <h1 className="text-2xl font-josefin text-white">
              {title}
            </h1>
          </div>
            
          <div className="pb-2">
            <h2 className="text-[#979797]">
              {alt}
            </h2>
          </div>

          <div className="">
            <h2 className="text-slate-400 text-sm">
              {content}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[750px] h-full">
        <h1 className="font-josefin text-white text-2xl pb-3">
          The Game Assembly:
        </h1>
        {Tab("bg-red-500", "Projects/PotionRun/Thumbnail",
        "Potion Run", 
        "Endless Runner",
        "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more."
        )}

        {Tab("bg-red-500", "Projects/Abducted/Thumbnail",
        "Abducted", 
        "Puzzle",
        "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more."
        )}

        {Tab("bg-red-500", "Projects/FallFromGrace/Thumbnail",
        "Fall From Grace", 
        "Schmup",
        "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
        , "border-b")}

      </div>
    </div> 
  )
}
