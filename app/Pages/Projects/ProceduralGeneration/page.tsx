"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Procedural Generation",
    genre: "Specialization",

    details: [
        "Platform: PC",
        "Engine: Unreal Engine",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/ProceduralGeneration/Intro",
            title: "What's Procedural Generation?",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/BardKnight/G1",
        image2: "Projects/BardKnight/G3",
        image3: "Projects/BardKnight/G2",
        image4: "Projects/BardKnight/G4",
        trailer: "Projects/BardKnight/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/ViperTrace",
            image: "Projects/ViperTrace/Thumbnail",
            title: "Viper Trace",
            genre: "FPS Survival",
            content: "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Portfolio",
            image: "Projects/Portfolio/ThumbnailE",
            title: "Portfolio",
            genre: "Website",
            content: "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more.",
        },
    ]
}

export default function ProceduralGeneration() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}