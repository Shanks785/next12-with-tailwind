import Image from "next/image"
import anime1 from "../public/images/demonSlay.gif"
import anime2 from "../public/images/sakuna.gif"
import anime3 from "../public/images/zoro.gif"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl my-5'>The Anime App</h1>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 my-5'>
        <Image
          objectFit='cover'
          src={anime3}
          alt='Picture of anime3'
          layout='fill'
          priority
        />
      </div>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 my-5'>
        <Image
          objectFit='cover'
          src={anime1}
          alt='Picture of anime1'
          layout='fill'
          priority
        />
      </div>
      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 my-5'>
        <Image
          objectFit='cover'
          src={anime2}
          alt='Picture of anime2'
          layout='fill'
          priority
        />
      </div>
    </div>
  )
}
