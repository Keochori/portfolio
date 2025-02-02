import React from "react"

export interface ProjectTabContent {
    link: string,
    image: string,
    title: string,
    alt: string,
    content: string,
}

export default class List{
    static ToonKart: ProjectTabContent = {
        link: "/Projects/ToonKart",
        image: "Projects/ToonKart/Thumbnail",
        title: "Toon Kart",
        alt: "Kart Racer",
        content: "Toon Kart is a 3D Kart Racer I developed using Unreal Engine 5. Click here to learn more.",
    };

    static Abaddon: ProjectTabContent = {
        link: "/Projects/Abaddon",
        image: "Projects/Abaddon/Thumb",
        title: "Abaddon",
        alt: "3D Game Engine",
        content: "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more.",
    };

    static Portfolio: ProjectTabContent = {
        link: "/Projects/Portfolio",
        image: "Projects/Portfolio/ThumbnailE",
        title: "Portfolio",
        alt: "Website",
        content: "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more.",
    };

    static Clifftop: ProjectTabContent = {
        link: "/Projects/Clifftop",
        image: "Projects/Clifftop/Thumbnail",
        title: "Kathy Rain 2: Soothsayer",
        alt: "Point and Click",
        content: "'Kathy Rain 2: Soothsayer' is an unreleased pixel art point and click made in Unity that I worked on during my internship. Click here to learn more.",
    };

    static ProceduralGeneration: ProjectTabContent = {
        link: "/Projects/ProceduralGeneration",
        image: "Projects/ProceduralGeneration/Thumbnail",
        title: "Procedural Generation",
        alt: "Specialization",
        content: "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine. Click here to learn more.",
    };

    static ViperTrace: ProjectTabContent = {
        link: "/Projects/ViperTrace",
        image: "Projects/ViperTrace/Thumbnail",
        title: "Viper Trace",
        alt: "FPS Survival",
        content: "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more.",
    };

    static Ekaya: ProjectTabContent = {
        link: "/Projects/Ekaya",
        image: "Projects/EkayaAndPebblesAHelpingHand/Thumbnail",
        title: "Ekaya & Pebbles: A Helping Hand",
        alt: "Third Person Adventure",
        content: "Ekaya & Pebbles: A Helping Hand is a Third-Person adventure game created by a group of TGA students using their own custom game engine. Click here to learn more.",
    };

    static Spite: ProjectTabContent = {
        link: "/Projects/Spite",
        image: "Projects/SpiteTheYellowPlague/Thumbnail",
        title: "Spite: The Yellow Plague",
        alt: "Hack 'n Slash",
        content: "Spite: The Yellow Plague is a Hack 'n Slash created by a group of TGA students using their own custom game engine. Click here to learn more.",
    };

    static BardKnight: ProjectTabContent = {
        link: "/Projects/BardKnight",
        image: "Projects/BardKnight/Thumbnail",
        title: "Bard Knight",
        alt: "Platformer",
        content: "Bard Knight is a platformer created by a group of TGA students using their own custom game engine. Click here to learn more.",
    };

    static TheTravelings: ProjectTabContent = {
        link: "/Projects/TheTravelings",
        image: "Projects/TheTravelings/Thumbnail",
        title: "The Travelings",
        alt: "Adventure",
        content: "The Travelings is a 2D Top-down adventure game created by a group of TGA students using the TGA engine. Click here to learn more.",
    };

    static FallFromGrace: ProjectTabContent = {
        link: "/Projects/FallFromGrace",
        image: "Projects/FallFromGrace/Thumbnail",
        title: "Fall From Grace",
        alt: "Schmup",
        content: "Fall From Grace is a schmup created by a group of TGA students using the TGA Engine. Click here to learn more.",
    };

    static Abducted: ProjectTabContent = {
        link: "/Projects/Abducted",
        image: "Projects/Abducted/Thumbnail",
        title: "Abducted",
        alt: "Puzzle",
        content: "Abducted is a mobile puzzle game created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
    };

    static PotionRun: ProjectTabContent = {
        link: "/Projects/PotionRun",
        image: "Projects/PotionRun/Thumbnail",
        title: "Potion Run",
        alt: "Endless Runner",
        content: "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
    };
}