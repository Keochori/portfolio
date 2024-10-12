"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"
import ProjectTabList from "@/app/Component/ProjectTabs"

const projectProps: ProjectProps = { 
    title: "Toon Kart",
    genre: "Kart Racer",
    
    details: [
    ],

    separatorWidth: "w-[190px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/ToonKart/Racing1",
            title: "What's Toon Kart?",
            content: "Toon Kart is a 3D Kart Racer I developed using Unreal Engine 5, and is solely programmed using the engines' blueprint feature. The game includes 3 kart appearances to choose from and four AI to race against.",
        },
        {
            image: true,
            left: true,
            url: "Projects/ToonKart/Blueprints",
            title: "Why Blueprints?",
            content: "Toon Kart is my first game-related project in Unreal Engine 5, and one of such significant size. Initially my plan was to program using C++ and only use blueprints for high-level programming, such as asset and variable value modification. Unfortunately I stumbled upon an integration problem with C++ and Blueprints that I wasn't able to solve, and that was a dealbreaker for me at the time.\n\nSince I was new to making games in Unreal, I decided that working in blueprints would be a good way to get familiar with the engine in a more beginner-friendly way.",
        },
        {
            image: false,
            left: false,
            url: "Projects/ToonKart/CustomMovement",
            title: "Custom Movement System",
            content: "Unreal Engine 5 comes with its own Vehicle Movement Component System, as well as many other different ways to move an object. After alot of testing I concluded that I would achieve more control over the feel and responsiveness that I was looking for by making my own custom movement system.\n\nToon Karts' custom movement system uses solely physics and includes Forward/Backward movement, Drifting and the option to dynamically change the drifting direction with the press of a button. The biggest advantage of using physics is that the behaviour of karts is more realistic, both during movement and during contact with other objects without the need of extra code.",
        },
        {
            image: false,
            left: true,
            url: "Projects/ToonKart/CustomBoost",
            title: "Custom Drift Boost System",
            content: "Another feature in Toon Kart is a custom Drift Boost System. Using a timer, every kart can charge a boost by drifting. There are three levels to a boost that progressively give more velocity once released. All boost levels are indicated with colors both by the in-game UI and a shader on the kart. The colors from worst to best are as follow: Red, Pink, Blue.",
        },
        {
            image: false,
            left: false,
            url: "Projects/ToonKart/Spline",
            title: "Splines",
            content: "Arguably the most useful tool during this project was the use of Splines. The majority of my environment consists of a race-track aswell as the metal barriers on respective sides of it. Both were made by using Unreal Engines' Spline Component. This component not only gave me the freedom of easily creating a completely custom race-track, but also includes functionality that was incredibly useful during the creation of AI and tracking player progress." ,
        },
        {
            image: false,
            left: true,
            url: "Projects/ToonKart/AIKARTS",
            title: "AI Racers",
            content: "Toon Kart includes the feature of AI karts to race against. The AI derives from the core vehicle class and uses the race-track spline to dynamically create checkpoints along it to progress. By using trigger-colliders, AI karts are also able to avoid obstacles aswell as un-stuck themselves in case of crashing.",
        },
        {
            image: false,
            left: false,
            url: "Projects/ToonKart/uiVid",
            title: "Menus & User Interface",
            content: "All menus and user interface for Toon Kart was made using Unreal Engines' Widget Blueprint tool. The game includes a Kart Select Menu, How To Play Menu, Settings Menu, In-Game Pause Menu, Win-screen Menu and a In-Game User Interface. The In-Game User Interface includes a drift boost bar, current laps indicator, current placement text and a minimap with realtime kart positions.\n\nToon Karts minimap is displayed using Unreal Engines' Widget Blueprint Tool, but is created using a Scene Capture 2D Component and sprites visible only to that component.",
        },
        {
            image: true,
            left: true,
            url: "Projects/ToonKart/KartVariation1",
            title: "Kart Variation",
            content: "There are three kart appearances to choose from in Toon Kart. All karts have the same stats. The player selection is made in the Kart Select Menu, while the AI gets karts randomly assigned to them.",
        },
    ],
    
    gallery: {
        include: false,
        image1: "Projects/Abducted/G1",
        image2: "Projects/Abducted/G3",
        image3: "Projects/Abducted/G2",
        image4: "Projects/Abducted/G4",
        trailer: "Projects/Abducted/Trailer",
    },

    projects: {
        projectL: ProjectTabList.Portfolio,
        projectR: ProjectTabList.PotionRun,
    }

}

export default function Abaddon() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}