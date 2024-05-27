"use client"
import ProjectSpecific, { ProjectProps } from "@/app/Component/ProjectSpecific"
import ProjectTabList from "@/app/Component/ProjectTabs"

const projectProps: ProjectProps = { 
    title: "Ekaya & Pebbles: A Helping Hand",
    genre: "Third Person Adventure",

    details: [
        "Platform: PC",
        "Engine: Custom Engine",
        "Contributions: Enemy Bruiser, Xp Pickup",
    ],

    separatorWidth: "w-[370px]",

    tabs: [
        {
            image: true,
            left: false,
            url: "Projects/EkayaAndPebblesAHelpingHand/Intro",
            title: "What is 'Ekaya & Pebbles: A Helping Hand' ?",
            content: "'Ekaya & Pebbles: A Helping Hand' is a third person adventurer for PC created by a group of TGA (The Game Assembly) students using their own custom engine. \n\n The story follows Ekaya, a girl who stumbles upon Pebbles, a magical creature of stone that can turn into a glove, giving the user telekinetic powers. It turns out that Pebbles is just part of a larger stone giant who has been ambushed by strange creatures. Ekaya sets out on a quest to save the giant.",
        },
        {
            image: true,
            left: true,
            url: "Projects/EkayaAndPebblesAHelpingHand/BruiserEnemy",
            title: "Bruiser Enemy",
            content: "My main contribution for this project was working on the Bruiser Enemy, implementing his shooting, chasing, attack and death behaviour. I also implemented animations for the bruiser, as well as his xp drop mechanic.",
        },
        {
            image: false,
            left: false,
            url: "Projects/EkayaAndPebblesAHelpingHand/ShootingBruiser",
            title: "Shooting Behaviour",
            content: "The shooting behaviour for the enemy bruiser was achieved by using our engine's animation and behaviour graph. \n\n Some problems that arose were that the bullet didn't line up with the animation and the animation transitions were sharp and too rapid. I solved this by creating a system with custom timers and states tied to variables that can be accessed by our design team, giving full customization capabilities down to the smallest detail.",
        },
        {
            image: false,
            left: true,
            url: "Projects/EkayaAndPebblesAHelpingHand/BruiserChase",
            title: "Chasing Behaviour",
            content: "Another behaviour of the enemy bruiser is chasing. When the player finds themselves in close enough proximity to a bruiser, he starts chasing the player. \n\n Apart from pursuing the player the Bruiser also takes obstacles into account, avoiding them and greatly preventing the chance of getting stuck while chasing. This was achieved with weighted steering behaviours, giving alot of freedom for adjustment and feel of the movement.",
        },
        {
            image: false,
            left: false,
            url: "Projects/EkayaAndPebblesAHelpingHand/BruiserAttack",
            title: "Attack Behaviour",
            content: "Whenever the enemy bruiser catches up to the player, he switches to melee attacks. Similarly to the shooting behaviour, timers and states tied to variables were used for tweaking and creating a fair and smooth experience.",
        },
        {
            image: false,
            left: true,
            url: "Projects/EkayaAndPebblesAHelpingHand/BruiserDeath",
            title: "Xp Pickup",
            content: "Another contribution of mine to the game was the creation and implementation of experience pickups. We took inspiration from our reference video game, 'Ratchet and Clank 2016' where experience drops behave similarly. \n\n It was challening to replicate the exact same results as the reference game, which we determined most likely used a mathematical formula, so we decided to instead create our own variation using the PhsyX API. The final result which we were very satisfied with was achieved by a mix of tweaking the physical force, direction and collider activation timing.",
        },
    ],

    gallery: {
        include: true,
        image1: "Projects/EkayaAndPebblesAHelpingHand/G1",
        image2: "Projects/EkayaAndPebblesAHelpingHand/G3",
        image3: "Projects/EkayaAndPebblesAHelpingHand/G2",
        image4: "Projects/EkayaAndPebblesAHelpingHand/G4",
        trailer: "Projects/EkayaAndPebblesAHelpingHand/Trailer",
    },

    projects: {
        projectL: ProjectTabList.Spite,
        projectR: ProjectTabList.ViperTrace,
    }
}

export default function Ekaya() {
    return (
        <div>
            <ProjectSpecific {...projectProps} />
        </div>
    )
}