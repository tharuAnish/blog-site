import Image from "next/image"
import heroImage from "@/assets/profile-pic.png"
import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <main className="flex h-[calc(100vh-60px)] max-w-7xl mx-auto">
      <section className="h-full grid place-items-center basis-3/5">
        <div>
          <h1 className="font-bold text-5xl tracking-wide leading-tight my-4">
            Hi, I am Anish, <br />
            Creative Web Developer
          </h1>
          <p className="w-[500px] my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            doloribus sunt molestias laboriosam eligendi excepturi dolorum
            cupiditate veritatis nisi ab.
          </p>
          <Button>Download Resume</Button>
        </div>
      </section>
      <section className="basis-2/5 grid place-items-center">
        <div className="relative">
          <div className="absolute  bg-sky-100 rounded-full h-[248px] w-[248px] top-0 right-0 "></div>
          <Image
            className="relative h-60 w-60 object-cover rounded-full"
            src={heroImage}
            alt="Hero section image"
          />
        </div>
      </section>
    </main>
  )
}
