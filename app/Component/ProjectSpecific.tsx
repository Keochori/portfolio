"use client"
import 'next-cloudinary/dist/cld-video-player.css';
import { CldImage } from 'next-cloudinary';
import { CldVideoPlayer } from 'next-cloudinary';
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { TfiClose } from "react-icons/tfi";
import Animation from "@/app/Component/Animation"
import { ProjectTabContent } from "@/app/Component/ProjectTabs"

interface ProjectTabProps {
    image: boolean;
    left: boolean;
    url: string;
    title: string;
    content: string;
  }

  interface ProjectGalleryProps {
    include: boolean;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    trailer: string;
  }

  interface MoreProjectsProps {
    projectL: ProjectTabContent;
    projectR: ProjectTabContent;
  }

export interface ProjectProps {
    title: string;
    genre: string;

    details: string[];
    separatorWidth: string;
  
    tabs: ProjectTabProps[];
    gallery: ProjectGalleryProps;
    projects: MoreProjectsProps;
  }

export default function Page(props: ProjectProps) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1150px)' })

    if (isTabletOrMobile == true) {
        return (
            <Animation>
              {TemplateMobile(props)}
            </Animation>
          )
    } else {
        return (
            <Animation>
              {Template(props)}
            </Animation>
          )
    }
}

function ProjectTab(tabContent : ProjectTabContent, last : string = "", contentCSS : string = "") {
    return (
      <Link href={tabContent.link}>
        <div className={"bg-opacity-5 bg-slate-400 flex flex-row w-full h-[200px] hover:h-[210px] transition-all overflow-hidden grayscale hover:grayscale-0 hover:bg-slate-300 hover:bg-opacity-10 " + last}>
          
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
          <div className="w-[450px] h-full flex flex-col items-center justify-center p-8">
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

function ContentText(title : string, content : string) {
    return (
        // Text
        <div className={"w-full h-full text-center p-20 pt-14 text-white "}>
            <p className="font-josefin text-6xl pb-6">
                {title}
            </p>

            <p className="font-josefin font-light text-2xl whitespace-pre-line text-left tracking-wide"> 
                {content}
            </p>
        </div>
    )
}

function Template(props: ProjectProps) {
    const [selectedImage, setSelectedImage] = useState("");
    const [showFullscreenImage, setShowFullscreenImage] = useState(false);
    
    const toggleFullscrenImage = (image : string) => {
        setSelectedImage(image);
        setShowFullscreenImage(!showFullscreenImage);
        if (showFullscreenImage) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const Gallery = (include : boolean) => {
        if (include) 
        {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-[1250px] h-fit flex flex-wrap justify-center pb-16 rounded-3xl">
        
                    {/* Text */}
                    <div className="w-[1200px] h-fit flex flex-col items-center space-y-1 p-12 pb-5">
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
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image1);}}>
                                    <CldImage className="rounded-xl shadow-md transition-all hover:opacity-70"
                                        width="535"
                                        height="200"
                                        src={props.gallery.image1}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
        
                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image2);}}>
                                    <CldImage className="rounded-xl shadow-md transition-all hover:opacity-70"
                                        width="535"
                                        height="200"
                                        src={props.gallery.image2}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        
                        {/* Second Row */}
                        <div className="w-full h-1/2 flex flex-row justify-center items-center space-x-7">
                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image3);}}>
                                    <CldImage className="rounded-xl shadow-md transition-all hover:opacity-70"
                                        width="535"
                                        height="200"
                                        src={props.gallery.image3}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
        
                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image4);}}>
                                    <CldImage className="rounded-xl shadow-md transition-all hover:opacity-70"
                                        width="535"
                                        height="200"
                                        src={props.gallery.image4}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Video */}
                    <div className="w-[1100px] h-fit pt-4">
                        <div className="shadow-md">
                            <CldVideoPlayer
                                width="1920"
                                height="1080"
                                src={props.gallery.trailer}
                                logo={false}
                            />
                        </div>
                    </div>
                </div>
            )
            }
    }

    const Detail = (content : string) => {
        return (           
            <div>
                <p className="font-josefin text-2xl text-[#979797]">
                    {content}
                </p>
            </div>     
        )
    }

    const ContentImage = (image : boolean, url : string, justify : string) => {
        if (image) 
        {
            return (
                // Image
                <div className={"w-[1600px] h-full flex " + justify}>
                    <button onClick={() => {toggleFullscrenImage(url)}}>
                        <CldImage className="rounded-xl transition-all hover:opacity-70"
                            width="710"
                            height="200"
                            src={url}
                            sizes="100vw"
                            alt=""
                        />
                    </button>
                </div>
            )
        } else 
        {
            return (
                // Video
                <div className={"w-[1600px] flex " + justify}>
                    <div className="h-fit w-[711px]">
                        <CldVideoPlayer className="rounded-xl"
                            width={1920}
                            height={1080}
                            controls={true}
                            src={url}
                            logo={false}
                        />
                    </div>
                </div>
            )
        }
    }

    const ContentTab = (image : boolean, left : boolean, url : string, title : string, content : string) => {
        if (left) {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-full h-fit flex items-center">
                    {ContentImage(image, url, "justify-end pl-2")}
                    {ContentText(title, content)}
                </div>
            )
        } 
        else 
        {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-full h-fit flex items-center">
                    {ContentText(title, content)}
                    {ContentImage(image, url, "justify-begin pr-2")}
                </div>
            )
        }
    }

    return (
        <div className="w-full h-fit flex flex-col items-center">
            
            {/* Fullscreen Image */}
            <div className={showFullscreenImage ? "fixed top-0 bg-black bg-opacity-90 w-full h-screen flex z-50" : "hidden"}>
                <div onClick={() => {toggleFullscrenImage("")}} className="w-[13.5%] h-screen"/>

                {/* Image */}
                <div className="w-[73%] h-screen grid grid-rows-[1fr_max-content_1fr]">
                    <div onClick={() => {toggleFullscrenImage("")}} className=""/>

                    <div className="h-fit">
                        <CldImage className=""
                            width="1400"
                            height="200"
                            src={selectedImage}
                            sizes="100vw"
                            alt=""
                        />
                    </div>

                    <div onClick={() => {toggleFullscrenImage("")}} className=""/>
                </div>

                {/* Exit Button */}
                <div onClick={() => {toggleFullscrenImage("")}} className="w-[13.5%] h-screen">
                    <div className="w-full h-[20%] flex justify-center items-center">
                        <button onClick={() => {toggleFullscrenImage("");}}>
                            <TfiClose className="size-16 fill-white opacity-20 transition-all hover:opacity-100"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit flex flex-col items-center pt-12 pb-4">
                {/* Title */}
                <p className="text-white font-josefin text-5xl">
                    {props.title}
                </p>

                {/* Alt */}
                <p className="font-josefin text-3xl text-[#cac18e]">
                    {props.genre}
                </p>

            </div>

            {/* Details */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit text-center flex items-center flex-col pb-10">
                {props.details.map((detail) => {
                    return Detail(detail)
                })}

                {/* Separator Line */}
                <div className={"bg-gray-700 h-[2px] rounded-xl " + props.separatorWidth}>
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {props.tabs.map((tab) => {
                    return ContentTab(tab.image, tab.left, tab.url, tab.title, tab.content)
                })}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {Gallery(props.gallery.include)}

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
                                        <Link href="/Projects">
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
                        {ProjectTab(props.projects.projectL)}
                        {ProjectTab(props.projects.projectR)}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Mobile ---------------

function ProjectTabMobile(tabContent : ProjectTabContent, last : string = "", contentCSS : string = "") {
    return (
      <Link href={tabContent.link}>
          <div className={"w-full h-fit border-t-2 bg-opacity-5 bg-slate-100 border-[#000000] hover:bg-opacity-10 " + last}>

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

function ContentTextMobile(title : string, content : string) {
    return (
        // Text
        <div className={"w-full h-full text-center p-6 pt-9 text-white "}>
            <p className="font-josefin text-6xl pb-4">
                {title}
            </p>

            <p className="font-josefin font-light text-2xl whitespace-pre-line text-left tracking-wide"> 
                {content}
            </p>
        </div>
    )
}

function TemplateMobile(props: ProjectProps) {
    const [selectedImage, setSelectedImage] = useState("");
    const [showFullscreenImage, setShowFullscreenImage] = useState(false);
    
    const toggleFullscrenImage = (image : string) => {
        setSelectedImage(image);
        setShowFullscreenImage(!showFullscreenImage);
        if (showFullscreenImage) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const Gallery = (include : boolean) => {
        if (include) {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-full h-fit flex flex-wrap justify-center">

                    {/* Text */}
                    <div className="w-fit h-fit flex flex-col items-center space-y-1 p-9 pb-4">
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
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image1);}}>
                                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                                        width="1000"
                                        height="200"
                                        src={props.gallery.image1}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image2);}}>
                                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                                        width="1000"
                                        height="200"
                                        src={props.gallery.image2}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image3);}}>
                                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                                        width="1000"
                                        height="200"
                                        src={props.gallery.image3}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => {toggleFullscrenImage(props.gallery.image4);}}>
                                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                                        width="1000"
                                        height="200"
                                        src={props.gallery.image4}
                                        sizes="100vw"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Video */}
                    <div className="w-[1100px] h-fit pt-4">
                        <div>
                            <CldVideoPlayer
                                width="1920"
                                height="1080"
                                src={props.gallery.trailer}
                                logo={false}
                            />
                        </div>
                    </div>
                </div>
            )
        }
    }

    const Detail = (content : string) => {
        return (
            <p className="font-josefin text-2xl text-[#979797]">
                {content}
            </p>
        )
    }

    const ContentImageMobile = (image : boolean, url : string, justify : string) => {
        if (image) 
        {
            return (
                // Image
                <div className={"flex pt-5 " + justify}>
                    <button onClick={() => {toggleFullscrenImage(url)}}>
                        <CldImage className="rounded-xl transition-all hover:opacity-70"
                            width="1000"
                            height="10"
                            src={url}
                            sizes="100vw"
                            alt=""
                        />
                    </button>
                </div>
            )
        }
        else 
        {
            return (
                // Video
                <div className={"w-full flex justify-center pt-5 " + justify}>
                    <div className="h-fit w-full">
                        <CldVideoPlayer className="rounded-xl"
                            width={1920}
                            height={1080}
                            controls={true}
                            src={url}
                        />
                    </div>
                </div>
            )
        }
    }

    const ContentTabMobile = (image : boolean, url : string, title : string, content : string) => {
        return (
            <div className="bg-slate-600 bg-opacity-20 w-full fit flex justify-center flex-wrap">
                {ContentTextMobile(title, content)}
                {ContentImageMobile(image, url, "justify-begin")}
            </div>
        )
    }

    return (
        <div className="w-full h-fit flex flex-col items-center">

            {/* Fullscreen Image */}
            <div className={showFullscreenImage ? "fixed top-0 bg-black bg-opacity-90 w-full h-screen flex z-50" : "hidden"}>
                <div onClick={() => {toggleFullscrenImage("")}} className="w-[13.5%] h-screen"/>

                {/* Image */}
                <div className="w-[73%] h-screen grid grid-rows-[1fr_max-content_1fr]">
                    <div onClick={() => {toggleFullscrenImage("")}} className=""/>

                    <div className="h-fit">
                        <CldImage className=""
                            width="1400"
                            height="200"
                            src={selectedImage}
                            sizes="100vw"
                            alt=""
                        />
                    </div>

                    <div onClick={() => {toggleFullscrenImage("")}} className=""/>
                </div>

                {/* Exit Button */}
                <div onClick={() => {toggleFullscrenImage("")}} className="w-[13.5%] h-screen">
                    <div className="w-full h-[20%] flex justify-center items-center">
                        <button onClick={() => {toggleFullscrenImage("");}}>
                            <TfiClose className="size-10 fill-white opacity-20 transition-all hover:opacity-100"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit flex flex-col items-center pt-12 pb-4">
                {/* Title */}
                <p className="text-white font-josefin text-5xl text-center">
                    {props.title}
                </p>

                {/* Alt */}
                <p className="font-josefin text-3xl text-[#cac18e]">
                    {props.genre}
                </p>

            </div>

            {/* Details */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit text-center flex items-center flex-col pb-10 p-3">

                {props.details.map((detail) => {
                    return Detail(detail)
                })}

                {/* Separator Line */}
                <div className="bg-gray-700 w-[200px] h-[2px] rounded-xl">
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {props.tabs.map((tab) => {
                    return ContentTabMobile(tab.image, tab.url, tab.title, tab.content)
                })}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {Gallery(props.gallery.include)}
                
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
                                    <Link href="/Projects">
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
                        {ProjectTabMobile(props.projects.projectL)}
                        {ProjectTabMobile(props.projects.projectR)}
                    </div>

                </div>
            </div>
        </div>
    )
}