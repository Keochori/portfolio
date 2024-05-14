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

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/PotionRun/Run",
            title: "What's Potion Run?",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/PotionRun/Monster2",
            title: "Monster Logic",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/PotionRun/UI",
            title: "User Interface",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/PotionRun/Menu",
            title: "Menus",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/PotionRun/G1",
        image2: "Projects/PotionRun/G3",
        image3: "Projects/PotionRun/G2",
        image4: "Projects/PotionRun/G4",
        trailer: "Projects/PotionRun/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Abaddon",
            image: "Projects/Abaddon/Placeholder1",
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