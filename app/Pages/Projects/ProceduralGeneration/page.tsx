"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"

const projectProps: ProjectProps = { 
    title: "Procedural Generation",
    genre: "Specialization",

    details: [
        "Platform: PC",
        "Engine: Unreal Engine 5",
    ],

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/ProceduralGeneration/Thumbnail",
            title: "Why Procedural Generation?",
            content: "The last assignment at The Game Assembly Vocational Education for video game programmers is a solo project of personal choice. As I was always interested in procedural generation I decided to delve deeper into the topic. For those unfamiliar, procedural generation is when data is being created using an algorithm instead of doing it manually, which I think is very interesting and cool, especially when the results can be seen visually. For that reason, I chose to procedurally generate a 3D terrain.",
        },
        {
            image: true,
            left: true,
            url: "Projects/ProceduralGeneration/Unreal",
            title: "Why Unreal Engine 5?",
            content: "Unreal Engine is a popular and well established engine with a lot of features and documentation, which would help me focus at the task at hand without many limitations. The engine supports visual scripting, which I wanted to try out, but I also wanted to gain experience with an engine so widely used in the game development industry.",
        },
        {
            image: true,
            left: false,
            url: "Projects/ProceduralGeneration/Noise",
            title: "Perlin Noise",
            content: "To achieve a generated terrain with variation in height I used 'Perlin Noise', which is a pseudo-random sequence of numbers that can be visualized with a 2D or 3D texture. In my case, I used one of Unreal Engines workshop add-ons called 'Fast Noise Generator' to generate 2D textures using perlin noise and apply height values to my terrain using the color shade of a coordinate in the texture. Since the perlin texture is blurred/smoothed down, the transitions between the colors are smooth, resulting in a better looking terrain with no sudden sharp changes in height. ",
        },
        {
            image: false,
            left: true,
            url: "Projects/ProceduralGeneration/Movement",
            title: "Position Based Generation",
            content: "Instead of generating a predetermined amount of terrain, I wanted to create something more interactive, therefore I decided to generate the terrain based on the players position. I was able to achieve a result where a chunk of terrain is generated when the player moves into a space that's empty.",
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

    projects: [
        {
            link: "/Pages/Projects/ViperTrace",
            image: "Projects/ViperTrace/Thumbnail",
            title: "Viper Trace",
            genre: "FPS Survival",
            content: "Viper Trace is a First-Person-Shooter survival game created by a group of TGA students using their own custom game engine. Click here to learn more.",
        },
        {
            link: "/Pages/Projects/Portfolio",
            image: "Projects/Portfolio/ThumbnailE",
            title: "Portfolio",
            genre: "Website",
            content: "My portfolio website is programmed using Next.js, Tailwind CSS and deployed by Vercel. Click here to learn more.",
        },
    ]
}

export default function ProceduralGeneration() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}