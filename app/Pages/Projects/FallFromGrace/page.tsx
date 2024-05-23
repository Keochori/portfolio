"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Fall From Grace",
    genre: "Shoot 'em Up",

    details: [
        "Platform: PC",
        "Engine: TGA Engine",
        "Contributions: Bullet Pattern Generator Tool, Hell Boss, Soundtrack",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/FallFromGrace/Cutscene",
            title: "What's Fall From Grace?",
            content: "Fall From Grace is a 2D shoot 'em up for PC created by a group of TGA (The Game Assembly) students using the TGA Engine. The story follows Lucifer, an angel turned evil seeking revenge against his father who exiled him. To get there, he must first fight his way through hell and heaven.",
        },
        {
            image: true,
            left: true,
            url: "Projects/FallFromGrace/Bullets",
            title: "Bullet Pattern Generator",
            content: "Majority of bullet patterns in-game were created using my Bullet Pattern Generator Tool that I created for this particular project. The tool has customizable values and parameters that affect the pattern in different ways. Examples of that are: speed, spread, direction, amount, sprite, sprite size and more. All settings are exported into a .json file that can later be read and used by a specific entity or entities.",
        },
        {
            image: true,
            left: false,
            url: "Projects/FallFromGrace/DevilBoss",
            title: "Hell Boss",
            content: "The final boss in hell stage was one of the few entities that didn't use my Bullet Pattern Generator since the patterns were more complex and had to be created by hand. Apart from working on his bullet patterns, I also worked on different behaviours such as entry, exit, positioning and different battle events/timings.",
        },
        {
            image: true,
            left: true,
            url: "Projects/FallFromGrace/Music",
            title: "Soundtrack",
            content: "Another one of my contributions to the game was the soundtrack. I combined my hobby and passion for music with game development and played, recorded and mixed a soundtrack for the game. The soundtrack consists of three tracks, Main Menu Theme, Hell Stage Theme and Heaven Stage Theme.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/FallFromGrace/G2",
        image2: "Projects/FallFromGrace/G3",
        image3: "Projects/FallFromGrace/G1",
        image4: "Projects/FallFromGrace/G4",
        trailer: "Projects/FallFromGrace/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Abducted",
            image: "Projects/Abducted/Thumbnail",
            title: "Abducted",
            genre: "Puzzle",
            content: "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/TheTravelings",
            image: "Projects/TheTravelings/Thumbnail",
            title: "The Travelings",
            genre: "Adventure",
            content: "The Travelings is a 2D Top-down adventure game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function FallFromGrace() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}