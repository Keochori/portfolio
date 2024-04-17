import Image from 'next/image'
import Portrait from '@/app/Images/portrait.png'

export default function About() {
  return (
    <div className="flex justify-center items-center">

      {/* Full box */}
      <div className=" w-[600px] h-[500px] flex">

        {/* Text box */}
        <div className=" w-[300px] h-[300px]">
            <p className="font-josefin text-slate-400 text-xl">
                Hi! My name is Mateusz Salaga and I am a 22 year old video game
                programmer from sweden.
            </p>

            <p className="font-josefin text-slate-400 text-xl">
              Feel free to check out my work!
            </p>

            
        </div>

        {/* Image box */}
        <div className="px-10 grayscale">
            <Image
            src={Portrait}
            width={200}
            height={200}
            alt="Picture of the author"
            />
        </div>

      </div>
    </div>
  );
}
