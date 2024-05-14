"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Bard Knight",
    genre: "Platformer",
    
    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: UI Tool, UI, Menus, Input/Controls",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/BardKnight/Intro",
            title: "What's Bard Knight?",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/BardKnight/UITool",
            title: "UI Tool",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/BardKnight/Menu",
            title: "User Interface",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/BardKnight/UI",
            title: "Menus",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/BardKnight/Town",
            title: "Input/Controls",
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
            link: "/Pages/Projects/TheTravelings",
            image: "Projects/TheTravelings/Thumbnail",
            title: "The Travelings",
            genre: "Adventure",
            content: "The Travelings is a 2D Top-down adventure game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Spite",
            image: "Projects/SpiteTheYellowPlague/Thumbnail",
            title: "Spite: The Yellow Plague",
            genre: "Hack 'n Slash",
            content: "Spite: The Yellow Plague is a Hack 'n Slash created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function BardKnight() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}