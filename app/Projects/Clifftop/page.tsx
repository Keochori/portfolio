"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"
import ProjectTabList from "@/app/Component/ProjectTabs"

const projectProps: ProjectProps = { 
    title: "Kathy Rain 2: Soothsayer",
    genre: "Point and Click",
    
    details: [
        "Engine: Unity",
        "Contributions: Gameplay, Debugging, Tools, UI",
    ],

    separatorWidth: "w-[450px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Clifftop/Intro",
            title: "What's Project III?",
            content: "Kathy Rain 2: Soothsayer is an unreleased pixel art point and click game made in Unity that I worked on during my internship between August 2023 and April 2024.",
        },
    ],

    gallery: {
        include: false,
        image1: "Projects/BardKnight/G1",
        image2: "Projects/BardKnight/G3",
        image3: "Projects/BardKnight/G2",
        image4: "Projects/BardKnight/G4",
        trailer: "Projects/BardKnight/Trailer",
    },

    projects: {
        projectL: ProjectTabList.ProceduralGeneration,
        projectR: ProjectTabList.Portfolio,
    }
}

export default function Clifftop() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}