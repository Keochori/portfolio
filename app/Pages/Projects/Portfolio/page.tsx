"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Portfolio",
    genre: "Website",

    details: [
    ],

    separatorWidth: "w-[140px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Portfolio/Builder",
            title: "Why didn't I use a website building platform?",
            content: "My experience with website builders is they can be bloated, slow and frustrating to work with. Another big reason is that they can be expensive. I personally prefer simpler design, and my website isn't big or complicated, therefore the amount of features a website building platform offers is redundant. Having absolute control and freedom over my website is also appreciated, which programming yourself allows for.",
        },
        {
            image: true,
            left: true,
            url: "Projects/Portfolio/NT",
            title: "Why Next.js & Tailwind CSS?",
            content: "I was first recommended Next.js by a friend. The company behind it, called Vercel, allows for an easy and free way to host your website. They also have alot of templates to choose from, which for me as an unexperienced web-developer was very useful to analyze and learn from. \n\n The reason I chose Tailwind CSS is because Next.js provides an easy way to integrate it during the creation of a new project. After working with it for a while, I was satisfied with the workflow and decided to keep using it. ",
        },
    ],

    gallery: {
        include: false,
        image1: "Projects/FallFromGrace/G2",
        image2: "Projects/FallFromGrace/G3",
        image3: "Projects/FallFromGrace/G1",
        image4: "Projects/FallFromGrace/G4",
        trailer: "Projects/FallFromGrace/Trailer",
    },

    projects: [
        {
            link: "/Pages/Projects/ProceduralGeneration",
            image: "Projects/ProceduralGeneration/Thumbnail",
            title: "Procedural Generation",
            genre: "Specialization",
            content: "For my specialization project at The Game Assembly, I chose to learn more about procedural generation. The engine I chose to work in was Unreal Engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Abaddon",
            image: "Projects/Abaddon/Thumb",
            title: "Abaddon",
            genre: "3D Game Engine",
            content: "Abaddon is my 3D Game Engine programmed using C++ and the DirectX library. Click here to learn more.",
        },
    ]
}

export default function Portfolio() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}