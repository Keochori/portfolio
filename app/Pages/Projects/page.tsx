"use client"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Animation from "@/app/Component/Animation"

export default function ProjectsPage() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })
  if (isTabletOrMobile == true) {
    return (
      <Animation>
        {ProjectsMobile()}
      </Animation>
    )
  } else {
    return (
      <Animation>
        {Projects()}
      </Animation>
    )
  }
}

function Tab(href : string, image : string, title : string, alt : string, content : string, last : string = "", contentCSS : string = "") {
  return (
    <Link href={href}>
      <div className={"bg-slate-400 bg-opacity-5 flex flex-row w-full h-[200px] hover:h-[210px] transition-all overflow-hidden grayscale border-t border-[#000000] hover:grayscale-0 hover:bg-slate-300 hover:bg-opacity-10 " + last}>
        
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
        <div className="h-full w-[450px] flex flex-col items-center justify-center p-8">
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

          <div className={" " + contentCSS}>
            <h2 className="text-slate-400 text-sm pl-1.5 ">
              {content}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

function Projects() {
  return (
    <div className="w-full h-screen flex justify-center">
        <div className="w-[750px] h-fit pb-28">

          {/* Personal */}
          <h1 className="font-josefin text-white text-2xl pb-3 underline flex justify-center">
            Personal:
          </h1>

          {/* Abaddon */}
          {Tab("/Pages/Projects/Abaddon",
          "Projects/Abaddon/Thumb",
          "Abaddon", 
          "3D Game Engine",
          "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more."
          )}

          {/* Portfolio */}
          {Tab("/Pages/Projects/Portfolio",
          "Projects/Portfolio/ThumbnailE",
          "Portfolio", 
          "Website",
          "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more."
          ,"border-b", "pl-1")}

          {/* TGA */}
          <h1 className="underline font-josefin text-white text-2xl pb-3 pt-14 flex justify-center">
            The Game Assembly [Higher Vocational Education]:
          </h1>
          
          {/* Specialization */}
          {Tab("/Pages/Projects/ProceduralGeneration",
          "Projects/ProceduralGeneration/Thumbnail",
          "Procedural Generation", 
          "Specialization",
          "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine 5. Click here to learn more."
          , "", "pl-3")}
          
          {/* 8 */}
          {Tab("/Pages/Projects/ViperTrace",
          "Projects/ViperTrace/Thumbnail",
          "Viper Trace", 
          "FPS Survival",
          "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more."
          , "", "pl-3")}

          {/* 7 */}
          {Tab("/Pages/Projects/Ekaya",
          "Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
          "Ekaya & Pebbles: A Helping Hand", 
          "Third Person Adventure",
          "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
          )}

          {/* 6 */}
          {Tab("/Pages/Projects/Spite",
          "Projects/SpiteTheYellowPlague/Thumbnail",
          "Spite: The Yellow Plague", 
          "Hack 'n Slash",
          "Spite: The Yellow Plague is a Hack 'n Slash created by a group of TGA students using their own custom game engine. Click here to learn more."
          )}

          {/* 5 */}
          {Tab("/Pages/Projects/BardKnight",
          "Projects/BardKnight/Thumbnail",
          "Bard Knight", 
          "Platformer",
          "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more."
          )}

          {/* 4 */}
          {Tab("/Pages/Projects/TheTravelings",
          "Projects/TheTravelings/Thumbnail",
          "The Travelings", 
          "Adventure",
          "The Travelings is a 2D Top-down adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
          , "", "pl-3")}

          {/* 3 */}
          {Tab("/Pages/Projects/FallFromGrace",
          "Projects/FallFromGrace/Thumbnail",
          "Fall From Grace", 
          "Schmup",
          "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
          )}

          {/* 2 */}
          {Tab("/Pages/Projects/Abducted",
          "Projects/Abducted/Thumbnail",
          "Abducted", 
          "Puzzle",
          "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more."
          )}

          {/* 1 */}
          {Tab("/Pages/Projects/PotionRun",
          "Projects/PotionRun/Thumbnail",
          "Potion Run", 
          "Endless Runner",
          "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more."
          , "border-b")}

        </div>
      </div> 
  )
}

// Mobile ----------

function TabMobile(href : string, image : string, title : string, alt : string, content : string, last : string = "", contentCSS : string = "") {
  return (
    <Link href={href}>
        <div className={"w-full h-fit border-t-2 bg-opacity-5 bg-slate-300 border-[#000000] hover:bg-opacity-10 " + last}>

          <div className="w-full h-full flex flex-col items-center justify-center pt-4">
            <div className="pt-2">
              <p className="text-2xl font-josefin text-white text-center">
                {title}
              </p>
            </div>

            <div className="pb-2">
              <p className="text-[#979797]">
                {alt}
              </p>
            </div>
          </div>

          <div className="w-full h-full flex justify-center p-4 pt-0">
            <p className="text-slate-400 text-sm text-center">
              {content}
            </p>
          </div>

          <div className="w-full h-full p-4 pt-0 flex justify-center">
            <CldImage className="border border-opacity-15 border-white"
              width="500"
              height="260"
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

        </div>
      </Link>
  )
}

function ProjectsMobile() {
  return (
    <div className="w-full h-screen">

      {/* Personal */}
      <h1 className="font-josefin text-white text-2xl pb-3 underline text-center">
        Personal:
      </h1>

      {/* Abaddon */}
      {TabMobile("/Pages/Projects/Abaddon",
      "Projects/Abaddon/Thumb",
      "Abaddon", 
      "3D Game Engine",
      "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more."
      )}

      {/* Portfolio */}
      {TabMobile("/Pages/Projects/Portfolio",
      "Projects/Portfolio/ThumbnailE",
      "Portfolio", 
      "Website",
      "My portfolio website is programmed using Next.js and Tailwind CSS. Click here to learn more."
      ,"border-b-2", "pl-1")}

      {/* TGA */}
      <h1 className="underline font-josefin text-white text-2xl pb-3 pt-14 text-center">
        The Game Assembly [Higher Vocational Education]:
      </h1>
      
      {/* Specialization */}
      {TabMobile("/Pages/Projects/ProceduralGeneration",
      "Projects/ProceduralGeneration/Thumbnail",
      "Procedural Generation", 
      "Specialization",
      "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine 5. Click here to learn more."
      , "", "pl-3")}
      
      {/* 8 */}
      {TabMobile("/Pages/Projects/ViperTrace",
      "Projects/ViperTrace/Thumbnail",
      "Viper Trace", 
      "FPS Survival",
      "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more."
      , "", "pl-3")}

      {/* 7 */}
      {TabMobile("/Pages/Projects/Ekaya",
      "Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
      "Ekaya & Pebbles: A Helping Hand", 
      "Third Person Adventure",
      "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
      )}

      {/* 6 */}
      {TabMobile("/Pages/Projects/Spite",
      "Projects/SpiteTheYellowPlague/Thumbnail",
      "Spite: The Yellow Plague", 
      "Dungeon Crawler",
      "Spite: The Yellow Plague is a dungeon crawler created by a group of TGA students using their own custom game engine. Click here to learn more."
      )}

      {/* 5 */}
      {TabMobile("/Pages/Projects/BardKnight",
      "Projects/BardKnight/Thumbnail",
      "Bard Knight", 
      "Platformer",
      "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more."
      )}

      {/* 4 */}
      {TabMobile("/Pages/Projects/TheTravelings",
      "Projects/TheTravelings/Thumbnail",
      "The Travelings", 
      "Adventure",
      "The Travelings is a 2D Top-down adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
      , "", "pl-3")}

      {/* 3 */}
      {TabMobile("/Pages/Projects/FallFromGrace",
      "Projects/FallFromGrace/Thumbnail",
      "Fall From Grace", 
      "Schmup",
      "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
      )}

      {/* 2 */}
      {TabMobile("/Pages/Projects/Abducted",
      "Projects/Abducted/Thumbnail",
      "Abducted", 
      "Puzzle",
      "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more."
      )}

      {/* 1 */}
      {TabMobile("/Pages/Projects/PotionRun",
      "Projects/PotionRun/Thumbnail",
      "Potion Run", 
      "Endless Runner",
      "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more."
      , "border-b-2")}
    </div> 
  )
}
