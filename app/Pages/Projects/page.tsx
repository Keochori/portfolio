"use client"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';


function Tab(image : string, title : string, alt : string, content : string, last : string = "", contentCSS : string = "") {
  
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

export default function Projects() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[750px] h-fit pb-28">

        {/* Personal */}
        <h1 className="font-josefin text-white text-2xl pb-3 underline flex justify-center">
          Personal:
        </h1>

        {/* Abaddon */}
        {Tab("Projects/Abaddon/Placeholder1",
        "Abaddon", 
        "3D Game Engine",
        "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more."
        )}

        {/* Portfolio */}
        {Tab("Projects/Portfolio/ThumbnailE",
        "Portfolio", 
        "Website",
        "My portfolio website is programmed using Next.js and Tailwind CSS. Click here to learn more."
        ,"border-b", "pl-1")}

        {/* TGA */}
        <h1 className="underline font-josefin text-white text-2xl pb-3 pt-14 flex justify-center">
          The Game Assembly [Higher Vocational Education]
        </h1>
        
        {/* Specialization */}
        {Tab("Projects/ProceduralGeneration/Thumbnail",
        "Procedural Generation", 
        "Specialization",
        "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine. Click here to learn more."
        , "", "pl-3")}
        
        {/* 8 */}
        {Tab("Projects/ViperTrace/Thumbnail",
        "Viper Trace", 
        "FPS Survival",
        "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more."
        , "", "pl-3")}

        {/* 7 */}
        {Tab("Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
        "Ekaya & Pebbles: A Helping Hand", 
        "Third Person Adventure",
        "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
        )}

        {/* 6 */}
        {Tab("Projects/SpiteTheYellowPlague/Thumbnail",
        "Spite: The Yellow Plague", 
        "Dungeon Crawler",
        "Spite: The Yellow Plague is a dungeon crawler created by a group of TGA students using their own custom game engine. Click here to learn more."
        )}

        {/* 5 */}
        {Tab("Projects/BardKnight/Thumbnail",
        "Bard Knight", 
        "Platformer",
        "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more."
        )}

        {/* 4 */}
        {Tab("Projects/TheTravelings/Thumbnail",
        "The Travelings", 
        "Adventure",
        "The Travelings is a 2D Top-down adventure game created by a group of TGA students using their own custom game engine. Click here to learn more."
        , "", "pl-3")}

        {/* 3 */}
        {Tab("Projects/FallFromGrace/Thumbnail",
        "Fall From Grace", 
        "Schmup",
        "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
        )}

        {/* 2 */}
        {Tab("Projects/Abducted/Thumbnail",
        "Abducted", 
        "Puzzle",
        "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more."
        )}

        {/* 1 */}
        {Tab("Projects/PotionRun/Thumbnail",
        "Potion Run", 
        "Endless Runner",
        "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more."
        , "border-b")}

      </div>
    </div> 
  )
}
