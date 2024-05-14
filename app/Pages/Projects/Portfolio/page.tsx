"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Portfolio",
    genre: "Website",

    details: [
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Portfolio/Intro",
            title: "Portfolio?",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/FallFromGrace/G2",
        image2: "Projects/FallFromGrace/G3",
        image3: "Projects/FallFromGrace/G1",
        image4: "Projects/FallFromGrace/G4",
        trailer: "Projects/FallFromGrace/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/ProceduralGeneration",
            image: "Projects/ProceduralGeneration/Thumbnail",
            title: "Procedural Generation",
            genre: "Specialization",
            content: "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Abaddon",
            image: "Projects/Abaddon/Placeholder1",
            title: "Abaddon",
            genre: "3D Game Engine",
            content: "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more.",
        },
    ]
}

export default function Portfolio() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}