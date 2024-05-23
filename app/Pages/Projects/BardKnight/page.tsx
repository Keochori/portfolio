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
            content: "Bard Knight is a 2D Platformer for PC created by a group of TGA (The Game Assembly) students using their own custom engine. The story follows Bard Knight who is as the name suggests, a bard and a knight, and the tales of his adventures which you get to play out.",
        },
        {
            image: true,
            left: true,
            url: "Projects/BardKnight/UITool",
            title: "UI Tool",
            content: "One of my contributions for the project was the creation of a UI Tool which allowed creating and implementing buttons, images and text. All UI for the project was created with the help of this tool.",
        },
        {
            image: true,
            left: false,
            url: "Projects/BardKnight/Menu",
            title: "User Interface",
            content: "Apart from working on the UI Tool, I was also responsible for implementing the UI and Menus such as the Main Menu, Settings, Credits and Pause Menu.",
        },
        {
            image: true,
            left: true,
            url: "Projects/BardKnight/Town",
            title: "Input/Controls",
            content: "Another contribution of mine for this project was the implementation of controls for the gamepad.",
        },
    ],

    gallery: {
        include: true,
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