"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Potion Run",
    genre: "Endless Runner",

    details: [
        "Platform: PC",
        "Engine: Unity",
        "Contributions: Monster Mechanic, UI, Menus",
    ],

    separatorWidth: "w-[400px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/PotionRun/Run",
            title: "What's Potion Run?",
            content: "Potion Run is a 2D Endless Runner for PC created by a group of TGA (The Game Assembly) students using the Unity Game Engine. The story follows a member of a village who has to deliver a potion of healing to the neighbouring town that's being attacked by a monster.",
        },
        {
            image: true,
            left: true,
            url: "Projects/PotionRun/Monster2",
            title: "Monster Logic",
            content: "One of my contributions to the project was the creation of the Monster Logic which I achieved using a custom script. Whenever the player takes damage, the monster slowly creeps closer, but if you manage to stay out of harms way for a certain duration of time, the monster slowly moves back out of vision instead.",
        },
        {
            image: true,
            left: false,
            url: "Projects/PotionRun/UI",
            title: "User Interface",
            content: "Implementing user interface for the game is another one of my contributions. That includes a timer, a healtbar and a points counter.",
        },
        {
            image: true,
            left: true,
            url: "Projects/PotionRun/Menu",
            title: "Menus",
            content: "Using Unity Engine's UI functionalities I was able to implement menus for the game, including Options, Credits, Levels and the Pause Menu.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/PotionRun/G1",
        image2: "Projects/PotionRun/G3",
        image3: "Projects/PotionRun/G2",
        image4: "Projects/PotionRun/G4",
        trailer: "Projects/PotionRun/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Abaddon",
            image: "Projects/Abaddon/Thumb",
            title: "Abaddon",
            genre: "3D Game Engine",
            content: "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Abducted",
            image: "Projects/Abducted/Thumbnail",
            title: "Abducted",
            genre: "Puzzle",
            content: "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
        },
    ]
}

export default function PotionRun() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}