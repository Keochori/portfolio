"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Viper Trace",
    genre: "FPS Survival",

    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: Player Movement, Animations",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/ViperTrace/Intro",
            title: "What's Viper Trace?",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/BardKnight/UITool",
            title: "Player Movement",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/BardKnight/Menu",
            title: "Animations",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/ViperTrace/G1",
        image2: "Projects/ViperTrace/G3",
        image3: "Projects/ViperTrace/G2",
        image4: "Projects/ViperTrace/G4",
        trailer: "Projects/ViperTrace/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Ekaya",
            image: "Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
            title: "Ekaya & Pebbles: A Helping Hand",
            genre: "Third Person Adventure",
            content: "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/ProceduralGeneration",
            image: "Projects/ProceduralGeneration/Thumbnail",
            title: "Procedural Generation",
            genre: "Specialization",
            content: "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine. Click here to learn more.",
        },
    ]
}

export default function ViperTrace() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}