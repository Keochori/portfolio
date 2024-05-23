"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Abaddon",
    genre: "3D Game Engine",
    
    details: [
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/Abaddon/Robot",
            title: "What's Abaddon?",
            content: "Abaddon is my personal 3D Game Engine created using C++ and DirectX11. The engine uses multiple other libraries aswell to support features such as an entity component system, graphical user interface, 3D model loader and texture loader.",
        },
        {
            image: true,
            left: true,
            url: "Projects/Abaddon/golem",
            title: "3D Models",
            content: "Abaddon supports loading in 3D models using the widely popular Open Asset Import Library (assimp). The Assimp library supports many formats, which is one of the reason I chose to use it, but also because it is easy to integrate and has alot of documentation.",
        },
        {
            image: true,
            left: false,
            url: "Projects/Abaddon/Texture",
            title: "Textures",
            content: "The Abaddon engine supports textured models and texture loading using the DirectXTex texture processing library. Any model can use and switch to any texture, and textures can be loaded from any image of the following format: (BMP, JPEG, PNG, TIFF, and HD Photo).",
        },
        {
            image: false,
            left: true,
            url: "Projects/Abaddon/Camera",
            title: "3D Camera",
            content: "Abaddon not only supports 3D space, but also has a fully working 3D camera object that can be moved and rotated in real time. I was able to achieve this with a group of mathematical equations and the DirectXMath library which greatly supported and simplified the process.",
        },
        {
            image: true,
            left: false,
            url: "Projects/Abaddon/entt",
            title: "Entity Component System",
            content: "Abaddon uses EnTT, which is an entity conponent system library for game programming. EnTT makes it possible to quickly arrange and sort through entities with specific components, creating a flexible and easy way to manage entities and the systems that are affecting them. For example, it is possible to add a Model Component to an entity, instantly giving it a working model and texture. Another example would be attaching a custom script component, making the entity run the code inside the script on initialization." ,
        },
        {
            image: true,
            left: true,
            url: "Projects/Abaddon/imgui",
            title: "Graphical User Interface",
            content: "For graphical user interface, Abaddon uses the widely popular ImGui library. ImGui has many useful features for game and engine development, such as window docking and optimized vertex buffers for rendering. The library is fast, easy to use and comes with alot of documentation thanks to its popularity. ",
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

    projects: [
        {
            link: "/Pages/Projects/Portfolio",
            image: "Projects/Portfolio/ThumbnailE",
            title: "Portfolio",
            genre: "Website",
            content: "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/PotionRun",
            image: "Projects/PotionRun/Thumbnail",
            title: "Potion Run",
            genre: "Endless Runner",
            content: "Potion Run is an endless runner created by a group of TGA students using the Unity Game Engine. Click here to learn more.",
        },
    ]
}

export default function Abaddon() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}