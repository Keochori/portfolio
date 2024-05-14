"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Abaddon",
    genre: "3D Game Engine",
    
    details: [
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Abaddon/Placeholder1",
            title: "What's Abaddon?",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/Abducted/G1",
        image2: "Projects/Abducted/G3",
        image3: "Projects/Abducted/G2",
        image4: "Projects/Abducted/G4",
        trailer: "Projects/Abducted/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Portfolio",
            image: "Projects/Portfolio/ThumbnailE",
            title: "Portfolio",
            genre: "Website",
            content: "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/PotionRun",
            image: "Projects/PotionRun/Thumbnail",
            title: "Potion Run",
            genre: "Endless Runner",
            content: "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
        },
    ]
}

export default function Abaddon() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}