"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Spite: The Yellow Plague",
    genre: "Hack 'n Slash",

    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: 3D Audio, FMOD, Soundtrack, SFX, Undo & Redo for Engine",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Hunter",
            title: "What is 'Spite: The Yellow Plague'?",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/SpiteTheYellowPlague/Fmod",
            title: "FMOD",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Ability",
            title: "Audio",
            content: "",
        },
        {
            image: true,
            left: true,
            url: "Projects/SpiteTheYellowPlague/Volt",
            title: "Undo & Redo Logic for Engine",
            content: "",
        },
        {
            image: true,
            left: false,
            url: "Projects/SpiteTheYellowPlague/Boat",
            title: "Soundtrack",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/SpiteTheYellowPlague/G1",
        image2: "Projects/SpiteTheYellowPlague/G3",
        image3: "Projects/SpiteTheYellowPlague/G2",
        image4: "Projects/SpiteTheYellowPlague/G4",
        trailer: "Projects/SpiteTheYellowPlague/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/BardKnight",
            image: "Projects/BardKnight/Thumbnail",
            title: "Bard Knight",
            genre: "Platformer",
            content: "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Ekaya",
            image: "Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
            title: "Ekaya & Pebbles: A Helping Hand",
            genre: "Third Person Adventure",
            content: "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function Spite() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}