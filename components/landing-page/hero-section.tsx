import Image from "next/image"
import heroImage from "@/assets/profile-pic.png"
import { Button } from "../ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <main className="flex h-[calc(100vh-60px)] max-w-7xl mx-auto">
      <section className="h-full grid place-items-center basis-3/5">
        <div>
          <h1 className="font-bold text-5xl tracking-wide leading-tight my-4">
            Hi, I am Anish, <br />
            Creative Web Developer
          </h1>
          <p className="w-[500px] my-5 dark:text-gray-200 text-gray-800">
            I am a passionate Web Developer | Engineer. Specialize in frontend
            development and have experience in backend integrations. I like
            working with modern technologies and creating user-friendly
            applications.
          </p>
          <Link href="https://drive.google.com/file/d/1MbXLYd5jwCEKLB0Ep_0O3qwgeh7mKGjK/view?usp=sharing">
            <Button>Download Resume</Button>
          </Link>
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
