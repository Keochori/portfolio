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

    separatorWidth: "w-[410px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/ViperTrace/Intro",
            title: "What's Viper Trace?",
            content: "Viper Trace is a First Person Shooter Surivival game for PC created by a group of TGA (The Game Assembly) students using their own custom engine. The game is aimed around trying to survive as long as possible against hordes of bloodthirsty creatures. There are multiple new areas and weapons to unlock as you progress through the game.",
        },
        {
            image: true,
            left: true,
            url: "Projects/ViperTrace/Sprint",
            title: "Player Movement",
            content: "One of my contributions to the game was the player movement. I was put in charge of implementing and perfecting the movement to feel as smooth and precise as possible, as well as making sure it felt similar to the reference game, which was 'Call of Duty Black Ops: Zombies'.",
        },
        {
            image: true,
            left: false,
            url: "Projects/ViperTrace/Reload",
            title: "Animations",
            content: "Another one of my contributions was implementing animations in the game, making sure they fit the movement and actions such as reloading, shooting, sprinting and more.",
        },
    ],

    gallery: {
        include: true,
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