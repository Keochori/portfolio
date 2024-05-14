"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Ekaya & Pebbles: A Helping Hand",
    genre: "Third Person Adventure",

    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: Enemy Bruiser, Xp Pickup",
    ],

    tabs: [
        {
            image: false,
            left: false,
            url: "Projects/EkayaAndPebblesAHelpingHand/Trailer",
            title: "What is 'Ekaya & Pebbles: A Helping Hand' ?",
            content: "",
        },
    ],

    gallery: {
        image1: "Projects/EkayaAndPebblesAHelpingHand/G1",
        image2: "Projects/EkayaAndPebblesAHelpingHand/G3",
        image3: "Projects/EkayaAndPebblesAHelpingHand/G2",
        image4: "Projects/EkayaAndPebblesAHelpingHand/G4",
        trailer: "Projects/EkayaAndPebblesAHelpingHand/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/Spite",
            image: "Projects/SpiteTheYellowPlague/Thumbnail",
            title: "Spite: The Yellow Plague",
            genre: "Hack 'n Slash",
            content: "Spite: The Yellow Plague is a Hack 'n Slash created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/ViperTrace",
            image: "Projects/ViperTrace/Thumbnail",
            title: "Viper Trace",
            genre: "FPS Survival",
            content: "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
    ]
}

export default function Ekaya() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}