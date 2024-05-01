"use client"
import { CldImage } from 'next-cloudinary';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'

function ProjectTab(href : string, image : string, title : string, alt : string, content : string, last : string = "", contentCSS : string = "") {
    return (
      <Link href={href}>
        <div className={"flex flex-row w-full h-[200px] hover:h-[210px] transition-all overflow-hidden grayscale hover:grayscale-0 " + last}>
          
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
          <div className="bg-opacity-5 bg-slate-400 w-[450px] h-full flex flex-col items-center justify-center p-8">
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

function ContentText(title : string, content : string, bg2 : string) {
    return (
        // Text
        <div className={"w-full h-full text-center p-20 pt-8 text-white "}>
            <p className="font-josefin text-6xl pb-3">
                {title}
            </p>

            <p className="font-josefin text-2xl"> 
                {content}
            </p>
        </div>
    )
}

function ContentImage(image : string, bg1 : string, justify : string) {
    return (
        // Image
        <div className={"w-[1600px] h-full flex " + justify}>
            <CldImage className="rounded-xl"
                width="710"
                height="200"
                src={image}
                sizes="100vw"
                alt=""
            />
        </div>
    )
}

function ContentTab(left : boolean, image : string, title : string, content : string, bg1 : string, bg2 : string, last : string = "") {
    if (left) {
        return (
            <div className={"bg-slate-600 bg-opacity-20 w-full h-[400px] flex " + last}>
                {ContentImage(image, bg1, "justify-end")}
                {ContentText(title, content, bg2)}
            </div>
        )
    } 
    else 
    {
        return (
            <div className={"bg-slate-600 bg-opacity-20 w-full h-[400px] flex " + last}>
                {ContentText(title, content, bg2)}
                {ContentImage(image, bg1, "justify-begin")}
            </div>
        )
    }
}

export default function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1150px)' })
    if (isTabletOrMobile == true) {
      return TheTravelingsMobile();
    } else {
      return TheTravelings();
    }
  }

function TheTravelings() {
    return (
        <div className="w-full h-fit flex flex-col items-center">

            {/* Header */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit flex flex-col items-center pt-12 pb-4">
                {/* Title */}
                <p className="text-white font-josefin text-5xl">
                    The Travelings
                </p>

                {/* Alt */}
                <p className="font-josefin text-3xl text-[#cac18e]">
                    Adventure
                </p>

            </div>

            {/* Details */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit text-center flex items-center flex-col pb-10">
                {/* Platform */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Platform: PC
                </p>

                {/* Engine */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Engine: Custom
                </p>

                {/* Contribution */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Contributions: Player Mechanics, Input/Controls, Animations
                </p>

                {/* Separator Line */}
                <div className="bg-gray-700 w-[600px] h-[2px] rounded-xl">

                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {ContentTab(
                    true,
                    "Projects/TheTravelings/Tents",
                    "What is it?",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dicta et debitis natus facere molestias saepe at, consectetur doloribus blanditiis id pariatur nesciunt, ullam sed cum quis accusamus exercitationem nobis.",
                    "bg-yellow-600",
                    "bg-red-600"
                    )}

                {ContentTab(
                    false,
                    "Projects/TheTravelings/Tents",
                    "What is it?",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dicta et debitis natus facere molestias saepe at, consectetur doloribus blanditiis id pariatur nesciunt, ullam sed cum quis accusamus exercitationem nobis.",
                    "bg-pink-600",
                    "bg-purple-600"
                    )}

                {ContentTab(
                    true,
                    "Projects/TheTravelings/Tents",
                    "What is it?",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dicta et debitis natus facere molestias saepe at, consectetur doloribus blanditiis id pariatur nesciunt, ullam sed cum quis accusamus exercitationem nobis.",
                    "bg-pink-600",
                    "bg-purple-600",
                    ""
                    )}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {/* Gallery */}
                <div className="bg-slate-600 bg-opacity-20 w-[1250px] h-fit flex flex-wrap justify-center pb-16 rounded-3xl">

                    {/* Text */}
                    <div className="w-[1200px] h-fit flex flex-col items-center space-y-1 p-8 pb-3">
                        <div className="w-full h-fit flex justify-center">
                            <p className="font-josefin text-5xl text-white">
                                Gallery & Trailer
                            </p>
                        </div>

                        <div className="bg-gray-700 w-[300px] h-[2px] rounded-xl">

                        </div>
                    </div>

                    {/* Pictures */}
                    <div className="w-[1200px] h-[650px]">

                        {/* First Row */}
                        <div className="w-full h-1/2 flex flex-row justify-center items-center space-x-7">
                            <div>
                                <CldImage className="rounded-xl"
                                    width="535"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>

                            <div>
                                <CldImage className="rounded-xl"
                                    width="535"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>
                        </div>
                        
                        {/* Second Row */}
                        <div className="w-full h-1/2 flex flex-row justify-center items-center space-x-7">
                            <div>
                                <CldImage className="rounded-xl"
                                    width="535"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>

                            <div>
                                <CldImage className="rounded-xl"
                                    width="535"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Video */}
                    <div className="w-[1100px] h-fit pt-4">
                        <div>
                            <CldVideoPlayer
                                width="1920"
                                height="1080"
                                src="Projects/TheTravelings/Trailer"
                                logo={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="bg-[#151c27] w-full h-fit">

                    {/* Text */}
                    <div className="flex justify-center">
                        <div className="w-[1000px] h-fit p-6 grid grid-cols-3">
                            <div className="flex flex-col items-center space-y-0.5 col-start-2">
                                <div>
                                    <p className="font-josefin text-4xl text-white">
                                        More of my work!
                                    </p>
                                </div>

                                <div className="bg-gray-700 w-[190px] h-[2px] rounded-xl">

                                </div>

                                <div className="w-full h-[30px] text-center pt-2">
                                    <div className="w-full h-[20px]">
                                        <Link href="/Pages/Projects">
                                            <p className="font-josefin text-xl text-[#3b65b3] underline hover:text-[#324672] transition-all">
                                                {"Or back to project list!"}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="w-full h-[250px] flex justify-center">
                        {ProjectTab("/Pages/Projects/ProceduralGeneration",
                        "Projects/FallFromGrace/Thumbnail",
                        "Fall From Grace", 
                        "Schmup",
                        "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
                        )}

                        {ProjectTab("/Pages/Projects/ProceduralGeneration",
                        "Projects/BardKnight/Thumbnail",
                        "Bard Knight", 
                        "Platformer",
                        "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more."
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mobile ---------------

function ProjectTabMobile(href : string, image : string, title : string, alt : string, content : string, last : string = "", contentCSS : string = "") {
    return (
      <Link href={href}>
          <div className={"w-full h-fit border-t bg-opacity-5 bg-slate-100 border-[#979797] hover:bg-opacity-10 " + last}>
  
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

function ContentTextMobile(title : string, content : string, bg2 : string) {
    return (
        // Text
        <div className={"w-full h-full text-center pt-8 text-white "}>
            <p className="font-josefin text-6xl pb-3">
                {title}
            </p>

            <p className="font-josefin text-2xl"> 
                {content}
            </p>
        </div>
    )
}

function ContentImageMobile(image : string, bg1 : string, justify : string) {
    return (
        // Image
        <div className={"flex pt-5 " + justify}>
            <CldImage className="rounded-xl"
                width="1000"
                height="10"
                src={image}
                sizes="100vw"
                alt=""
            />
        </div>
    )
}

function ContentTabMobile(image : string, title : string, content : string, bg1 : string, bg2 : string, last : string = "") {
    return (
        <div className={"bg-slate-600 bg-opacity-20 w-full fit flex justify-center flex-wrap " + last}>
            {ContentTextMobile(title, content, bg2)}
            {ContentImageMobile(image, bg1, "justify-begin")}
        </div>
    )
}

function TheTravelingsMobile() {
    return (
        <div className="w-full h-fit flex flex-col items-center">

            {/* Header */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit flex flex-col items-center pt-12 pb-4">
                {/* Title */}
                <p className="text-white font-josefin text-5xl">
                    The Travelings
                </p>

                {/* Alt */}
                <p className="font-josefin text-3xl text-[#cac18e]">
                    Adventure
                </p>

            </div>

            {/* Details */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit text-center flex items-center flex-col pb-10 p-3">

                {/* Platform */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Platform: PC
                </p>

                {/* Engine */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Engine: Custom
                </p>

                {/* Contribution */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Contributions: Player Mechanics, Input/Controls, Animations
                </p>

                {/* Separator Line */}
                <div className="bg-gray-700 w-[200px] h-[2px] rounded-xl">
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {ContentTabMobile(
                    "Projects/TheTravelings/Tents",
                    "What is it?",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dicta et debitis natus facere molestias saepe at, consectetur doloribus blanditiis id pariatur nesciunt, ullam sed cum quis accusamus exercitationem nobis.",
                    "bg-yellow-600",
                    "bg-red-600"
                    )}

                {ContentTabMobile(
                    "Projects/TheTravelings/Tents",
                    "What is it?",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dicta et debitis natus facere molestias saepe at, consectetur doloribus blanditiis id pariatur nesciunt, ullam sed cum quis accusamus exercitationem nobis.",
                    "bg-yellow-600",
                    "bg-red-600"
                    )}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {/* Gallery */}
                <div className="bg-slate-600 bg-opacity-20 w-full h-fit flex flex-wrap justify-center">

                    {/* Text */}
                    <div className="w-fit h-fit flex flex-col items-center space-y-1 p-8 pb-3">
                        <div className="w-full h-fit flex justify-center">
                            <p className="font-josefin text-4xl text-white">
                                Gallery & Trailer
                            </p>
                        </div>

                        <div className="bg-gray-700 w-[230px] h-[2px] rounded-xl">

                        </div>
                    </div>

                    {/* Pictures */}
                    <div className="w-full h-fit pt-3">

                        <div className="w-full h-1/2 space-y-5 flex flex-wrap justify-center">
                            <div>
                                <CldImage className="rounded-xl"
                                    width="1000"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>

                            <div>
                                <CldImage className="rounded-xl"
                                    width="1000"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>
                            <div>
                                <CldImage className="rounded-xl"
                                    width="1000"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>

                            <div>
                                <CldImage className="rounded-xl"
                                    width="1000"
                                    height="200"
                                    src="Projects/TheTravelings/Tents"
                                    sizes="100vw"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Video */}
                    <div className="w-[1100px] h-fit pt-4">
                        <div>
                            <CldVideoPlayer
                                width="1920"
                                height="1080"
                                src="Projects/TheTravelings/Trailer"
                                logo={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="bg-[#151c27] w-full h-fit">

                    {/* Text */}
                    <div className="w-full h-fit flex justify-center p-5">
                        <div className="w-full h-fit flex flex-col items-center space-y-0.5 col-start-2">
                            <div>
                                <p className="font-josefin text-4xl text-white">
                                    More of my work!
                                </p>
                            </div>

                            <div className="bg-gray-700 w-[190px] h-[2px] rounded-xl">

                            </div>

                            <div className="w-full h-[30px] text-center pt-2">
                                <div className="w-full h-[20px]">
                                    <Link href="/Pages/Projects">
                                        <p className="font-josefin text-xl text-[#3b65b3] underline hover:text-[#324672] transition-all">
                                            {"Or back to project list!"}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="w-full h-fit justify-center">
                        {ProjectTabMobile("/Pages/Projects/ProceduralGeneration",
                        "Projects/FallFromGrace/Thumbnail",
                        "Fall From Grace", 
                        "Schmup",
                        "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more."
                        )}

                        {ProjectTabMobile("/Pages/Projects/ProceduralGeneration",
                        "Projects/BardKnight/Thumbnail",
                        "Bard Knight", 
                        "Platformer",
                        "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more."
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}