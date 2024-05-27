"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"
import ProjectTabList from "@/app/Component/ProjectTabs"

const projectProps: ProjectProps = { 
    title: "Spite: The Yellow Plague",
    genre: "Hack 'n Slash",

    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: 3D Audio, FMOD, Soundtrack, SFX, Undo & Redo for Engine",
    ],

    separatorWidth: "w-[750px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Hunter",
            title: "What is 'Spite: The Yellow Plague'?",
            content: "'Sprite: The Yellow Plague' is a 3D Hack 'n Slash game for PC created by a group of TGA (The Game Assembly) students using their own custom engine. The story follows a bounty hunter on a quest to defeat monsters pleaguing a town and its surroundings.",
        },
        {
            image: true,
            left: true,
            url: "Projects/SpiteTheYellowPlague/Fmod",
            title: "FMOD",
            content: "One of my contributions for the project was integrating and using FMOD, which is an API for adaptive audio in video games. The primary reason we chose FMOD was the ability to implement audio in 3D space.",
        },
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Ability",
            title: "Audio",
            content: "Another one of my contributions was helping find and implement sounds into the game, as well as learn and work with FMOD to achieve surround sound.",
        },
        {
            image: true,
            left: true,
            url: "Projects/SpiteTheYellowPlague/Boat",
            title: "Soundtrack",
            content: "Combining my hobby and passion for music with game development I provided this project with a soundtrack that I played, recorded and mixed. The soundtrack consists of three tracks, Village Theme, Swamp Theme and Boss Theme.",
        },
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Volt",
            title: "Undo & Redo Logic for Engine",
            content: "I was able to implement undo & redo logic for our engine using stacks that keep actions and changes archived, making it possible to undo and redo them on the fly. This feature greatly improved the quality of life and sped up the process for our level designers building the levels.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/SpiteTheYellowPlague/G1",
        image2: "Projects/SpiteTheYellowPlague/G3",
        image3: "Projects/SpiteTheYellowPlague/G2",
        image4: "Projects/SpiteTheYellowPlague/G4",
        trailer: "Projects/SpiteTheYellowPlague/Trailer",
    },

    projects: {
        projectL: ProjectTabList.BardKnight,
        projectR: ProjectTabList.Ekaya,
    }
}

export default function Spite() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}