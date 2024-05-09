"use client"
import 'next-cloudinary/dist/cld-video-player.css';
import { CldImage } from 'next-cloudinary';
import { CldVideoPlayer } from 'next-cloudinary';
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { TfiClose } from "react-icons/tfi";


interface ProjectTabProps {
    left: boolean;
    image: string;
    title: string;
    content: string;
  }

  interface ProjectGalleryProps {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    trailer: string;
  }

  interface MoreProjectsProps {
    link: string;
    image: string;
    title: string;
    genre: string;
    content: string;
  }

export interface ProjectProps {
    title: string;
    genre: string;

    platform: string;
    engine: string;
    contributions: string;
  
    tabs: ProjectTabProps[];
    gallery: ProjectGalleryProps;
    projects: MoreProjectsProps[];
  }

export default function Page(props: ProjectProps) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1150px)' })

    if (isTabletOrMobile == true) {
      return TemplateMobile(props);
    } else {
      return Template(props);
    }
}

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

function ContentText(title : string, content : string) {
    return (
        // Text
        <div className={"w-full h-full text-center p-20 pt-14 text-white "}>
            <p className="font-josefin text-6xl pb-6">
                {title}
            </p>

            <p className="font-josefin font-light text-2xl"> 
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

    const ContentImage = (image : string, justify : string) => {
        return (
            // Image
            <div className={"w-[1600px] h-full flex " + justify}>
                <button onClick={() => {toggleFullscrenImage(image)}}>
                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                        width="710"
                        height="200"
                        src={image}
                        sizes="100vw"
                        alt=""
                    />
                </button>
            </div>
        )
    }

    const ContentTab = (left : boolean, image : string, title : string, content : string) => {
        if (left) {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-full h-[400px] flex">
                    {ContentImage(image, "justify-end")}
                    {ContentText(title, content)}
                </div>
            )
        } 
        else 
        {
            return (
                <div className="bg-slate-600 bg-opacity-20 w-full h-[400px] flex">
                    {ContentText(title, content)}
                    {ContentImage(image, "justify-begin")}
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
                {/* Platform */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Platform: {props.platform}
                </p>

                {/* Engine */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Engine: {props.engine}
                </p>

                {/* Contribution */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Contributions: {props.contributions}
                </p>

                {/* Separator Line */}
                <div className="bg-gray-700 w-[600px] h-[2px] rounded-xl">
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {props.tabs.map((tab) => {
                    return ContentTab(tab.left, tab.image, tab.title, tab.content)
                })}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {/* Gallery */}
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
                        {props.projects.map((project) => {
                            return ProjectTab(
                                project.link,
                                project.image,
                                project.title,
                                project.genre,
                                project.content,
                            )
                        })}
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

function ContentTextMobile(title : string, content : string) {
    return (
        // Text
        <div className={"w-full h-full text-center p-6 pt-9 text-white "}>
            <p className="font-josefin text-6xl pb-4">
                {title}
            </p>

            <p className="font-josefin font-light text-2xl"> 
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

    const ContentImageMobile = (image : string, justify : string) => {
        return (
            // Image
            <div className={"flex pt-5 " + justify}>
                <button onClick={() => {toggleFullscrenImage(image)}}>
                    <CldImage className="rounded-xl transition-all hover:opacity-70"
                        width="1000"
                        height="10"
                        src={image}
                        sizes="100vw"
                        alt=""
                    />
                </button>
            </div>
        )
    }

    const ContentTabMobile = (image : string, title : string, content : string) => {
        return (
            <div className="bg-slate-600 bg-opacity-20 w-full fit flex justify-center flex-wrap">
                {ContentTextMobile(title, content)}
                {ContentImageMobile(image, "justify-begin")}
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
                <p className="text-white font-josefin text-5xl">
                    {props.title}
                </p>

                {/* Alt */}
                <p className="font-josefin text-3xl text-[#cac18e]">
                    {props.genre}
                </p>

            </div>

            {/* Details */}
            <div className="bg-slate-600 bg-opacity-10 w-full h-fit text-center flex items-center flex-col pb-10 p-3">

                {/* Platform */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Platform: {props.platform}
                </p>

                {/* Engine */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Engine: {props.engine}
                </p>

                {/* Contribution */}
                <p className="font-josefin text-2xl text-[#979797]">
                    Contributions: {props.contributions}
                </p>

                {/* Separator Line */}
                <div className="bg-gray-700 w-[200px] h-[2px] rounded-xl">
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-fit pt-20 space-y-20 pb-20">
                {props.tabs.map((tab) => {
                    return ContentTabMobile(tab.image, tab.title, tab.content)
                })}
            </div>

            <div className="w-full h-full flex flex-wrap justify-center space-y-14">

                {/* Gallery */}
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
                    {props.projects.map((project) => {
                            return ProjectTabMobile(
                                project.link,
                                project.image,
                                project.title,
                                project.genre,
                                project.content,
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}