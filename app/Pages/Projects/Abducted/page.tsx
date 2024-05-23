"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Abducted",
    genre: "Puzzle",
    
    details: [
        "Platform: Mobile",
        "Engine: Unity",
        "Contributions: Movement Tile System, Saw Trap, Box Mechanics, Rabbit Enemy AI",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Abducted/Up",
            title: "What is 'Abducted' ?",
            content: "Abducted is a 3D puzzle game for mobile created by TGA (The Game Assembly) students using the Unity Engine. The story follows a group of people that have been abducted by aliens and put into strange rooms which they are trying to escape.",
        },
        {
            image: true,
            left: true,
            url: "Projects/Abducted/Movement2",
            title: "Movement Tile System",
            content: "One of my contributions to the game is the Movement Tile System. All in-game movement is determined by a grid of tiles with different settings, which in turn determine how the tile is interacted with. Tiles support all of the three axis 'X', 'Y' and 'Z'.",
        },
        {
            image: true,
            left: false,
            url: "Projects/Abducted/Saw3",
            title: "Saw Trap",
            content: "The Saw Trap is an obstacle that moves along a predetermined path and kills the player on collision. Whenever it reaches the end from one direction, it turns around and moves the other way, creating a loop. I created it by combining my movement tile system with a custom script for the saw. The path is determined by giving tiles a specific tag that the saw recognizes and follows using the before-mentioned saw script.",
        },
        {
            image: true,
            left: true,
            url: "Projects/Abducted/Box2",
            title: "Box Mechanics",
            content: "One of the features in Abducted is being able to move boxes, which are often part of a puzzle. Box mechanics for the game were created combining my movement tile system with a custom script, similar to the saw trap. Before a box is moved, a custom script checks what tags the target tile is associated with and acts accordingly.",
        },
        {
            image: true,
            left: false,
            url: "Projects/Abducted/Rabbit2",
            title: "Rabbit Enemy AI",
            content: "Another one of my contributions was the work on Rabbit Enemy's base logic. The rabbit will navigate through tiles in a way that follows the player until it collides with him. Tweaks, improvements and shortest path algorithms were implemented by other members of the team.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/Abducted/G1",
        image2: "Projects/Abducted/G3",
        image3: "Projects/Abducted/G2",
        image4: "Projects/Abducted/G4",
        trailer: "Projects/Abducted/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/PotionRun",
            image: "Projects/PotionRun/Thumbnail",
            title: "Potion Run",
            genre: "Endless Runner",
            content: "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/FallFromGrace",
            image: "Projects/FallFromGrace/Thumbnail",
            title: "Fall From Grace",
            genre: "Schmup",
            content: "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function Abducted() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}