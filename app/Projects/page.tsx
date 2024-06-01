"use client"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Animation from "@/app/Component/Animation"
import ProjectTabList, { ProjectTabContent } from "@/app/Component/ProjectTabs"

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

function Tab(tabContent : ProjectTabContent, last : string = "", contentCSS : string = "") {
  return (
    <Link href={tabContent.link}>
      <div className={"bg-slate-400 bg-opacity-5 flex flex-row w-full h-[200px] hover:h-[210px] transition-all overflow-hidden grayscale border-t border-[#000000] hover:grayscale-0 hover:bg-slate-300 hover:bg-opacity-10 " + last}>
        
        {/* Image */}
        <div className="h-full w-[300px]">
          <CldImage
            width="300"
            height="250"
            src={tabContent.image}
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
              {tabContent.title}
            </h1>
          </div>
            
          <div className="pb-2">
            <h2 className="text-[#979797]">
              {tabContent.alt}
            </h2>
          </div>

          <div className={" " + contentCSS}>
            <h2 className="text-slate-400 text-sm pl-1.5 ">
              {tabContent.content}
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
          {Tab(ProjectTabList.Abaddon)}

          {/* Portfolio */}
          {Tab(ProjectTabList.Portfolio, "border-b", "pl-1")}

          {/* Internship */}
          <h1 className="font-josefin text-white text-2xl pb-3 pt-14 underline flex justify-center">
            Internship:
          </h1>

          {/* Project III */}
          {Tab(ProjectTabList.Clifftop, "border-b", "pl-1")}

          {/* TGA */}
          <h1 className="underline font-josefin text-white text-2xl pb-3 pt-14 flex justify-center">
            The Game Assembly [Higher Vocational Education]:
          </h1>
          
          {/* Specialization */}
          {Tab(ProjectTabList.ProceduralGeneration, "", "pl-3")}
          
          {/* 8 */}
          {Tab(ProjectTabList.ViperTrace, "", "pl-3")}

          {/* 7 */}
          {Tab(ProjectTabList.Ekaya)}

          {/* 6 */}
          {Tab(ProjectTabList.Spite)}

          {/* 5 */}
          {Tab(ProjectTabList.BardKnight)}

          {/* 4 */}
          {Tab(ProjectTabList.TheTravelings, "", "pl-3")}

          {/* 3 */}
          {Tab(ProjectTabList.FallFromGrace)}

          {/* 2 */}
          {Tab(ProjectTabList.Abducted)}

          {/* 1 */}
          {Tab(ProjectTabList.PotionRun, "border-b")}

        </div>
      </div> 
  )
}

// Mobile ----------

function TabMobile(tabContent : ProjectTabContent, last : string = "", contentCSS : string = "") {
  return (
    <Link href={tabContent.link}>
        <div className={"w-full h-fit border-t-2 bg-opacity-5 bg-slate-300 border-[#000000] hover:bg-opacity-10 " + last}>

          <div className="w-full h-full flex flex-col items-center justify-center pt-4">
            <div className="pt-2">
              <p className="text-2xl font-josefin text-white text-center">
                {tabContent.title}
              </p>
            </div>

            <div className="pb-2">
              <p className="text-[#979797]">
                {tabContent.alt}
              </p>
            </div>
          </div>

          <div className="w-full h-full flex justify-center p-4 pt-0">
            <p className="text-slate-400 text-sm text-center">
              {tabContent.content}
            </p>
          </div>

          <div className="w-full h-full p-4 pt-0 flex justify-center">
            <CldImage className="border border-opacity-15 border-white"
              width="500"
              height="260"
              src={tabContent.image}
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
          <h1 className="font-josefin text-white text-2xl pb-3 underline flex justify-center">
            Personal:
          </h1>

          {/* Abaddon */}
          {TabMobile(ProjectTabList.Abaddon)}

          {/* Portfolio */}
          {TabMobile(ProjectTabList.Portfolio, "border-b-2", "pl-1")}

          {/* Internship */}
          <h1 className="font-josefin text-white text-2xl pb-3 pt-14 underline flex justify-center">
            Internship:
          </h1>

          {/* Project III */}
          {TabMobile(ProjectTabList.Clifftop, "border-b-2", "pl-1")}

          {/* TGA */}
          <h1 className="underline font-josefin text-white text-2xl pb-3 pt-14 flex justify-center text-center">
            The Game Assembly [Higher Vocational Education]:
          </h1>
          
          {/* Specialization */}
          {TabMobile(ProjectTabList.ProceduralGeneration, "", "pl-3")}
          
          {/* 8 */}
          {TabMobile(ProjectTabList.ViperTrace, "", "pl-3")}

          {/* 7 */}
          {TabMobile(ProjectTabList.Ekaya)}

          {/* 6 */}
          {TabMobile(ProjectTabList.Spite)}

          {/* 5 */}
          {TabMobile(ProjectTabList.BardKnight)}

          {/* 4 */}
          {TabMobile(ProjectTabList.TheTravelings, "", "pl-3")}

          {/* 3 */}
          {TabMobile(ProjectTabList.FallFromGrace)}

          {/* 2 */}
          {TabMobile(ProjectTabList.Abducted)}

          {/* 1 */}
          {TabMobile(ProjectTabList.PotionRun, "border-b-2")}

    </div> 
  )
}
