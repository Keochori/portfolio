"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "The Travelings",
    genre: "Adventure",

    details: [
        "Platform: PC",
        "Engine: TGA Engine",
        "Contributions: Player Mechanics, Input/Controls, Animations",
    ],

    separatorWidth: "w-[580px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/TheTravelings/Tents",
            title: "What is 'The Travelings' ?",
            content: "The Travelings is a 2D Adventurer for PC created by a group of TGA (The Game Assembly) students using the TGA Engine. \n\n The story follows a caravan of nomads in the desert looking to find their way to the Oasis, an almost dreamlike place with fresh water and plenty of food. Along the way, they stumble upon obstacles and dangers, but as a brave member of the caravan you decide to help clear the path.",
        },
        {
            image: true,
            left: true,
            url: "Projects/TheTravelings/Attack",
            title: "Player Mechanics",
            content: "One of my contributions to The Travelings was the creation of the main player mechanics, which includes basic movement, dodge roll and a standard attack that can be turned into a three hit-combo.  All essential variables such as movement speed, damage, dodge duration, etc, were exposed for easy modification by our Level Designers using .json files.",
        },
        {
            image: true,
            left: false,
            url: "Projects/TheTravelings/Icon",
            title: "Input / Controls",
            content: "Another one of my contributions for the project was helping build and utilize the Input Manager system. The Input Manager uses subscription type managment, making it possible for different parts of the game system to subscribe, recieve and react accordingly to input by the player.",
        },
        {
            image: true,
            left: true,
            url: "Projects/TheTravelings/Run",
            title: "Animations",
            content: "My final main contribution to the game was the implementation of animations. Using assets provided by our talented team of artists and the TGA Engine animation controller, I was able create and utilize a pipeline that would later be used for all of our animations in-game.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/TheTravelings/G3",
        image2: "Projects/TheTravelings/G2",
        image3: "Projects/TheTravelings/G1",
        image4: "Projects/TheTravelings/G4",
        trailer: "Projects/TheTravelings/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/FallFromGrace",
            image: "Projects/FallFromGrace/Thumbnail",
            title: "Fall From Grace",
            genre: "Schmup",
            content: "Fall From Grace is a schmup created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
          link: "/Pages/Projects/BardKnight",
          image: "Projects/BardKnight/Thumbnail",
          title: "Bard Knight",
          genre: "Platformer",
          content: "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function TheTravelings() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}