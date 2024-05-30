import Image from "next/image"
import heroImage from "@/assets/profile-pic.png"
import { Button } from "../ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <main className="flex h-[calc(100vh-60px)] sm:flex-col-reverse sm:max-w-full max-w-7xl mx-auto">
      <section className="h-full grid place-items-center sm:place-items-start basis-3/5 ">
        <div>
          <h1 className="font-bold sm:text-3xl sm:px-4 text-5xl sm:text-center tracking-wide leading-tight my-4">
            Hi, I am Anish,
            <br />
            Creative WebDeveloper
          </h1>
          <p className="w-[500px] sm:px-4 sm:py-3 sm:text-center sm:w-full my-5 dark:text-gray-200 text-gray-800">
            I am a WebEngineer specialize in frontend development and have
            experience in backend integrations. I like working with modern
            technologies and creating user-friendly applications.
          </p>
          <Link
            className="sm:flex sm:justify-center"
            href="https://drive.google.com/file/d/1MbXLYd5jwCEKLB0Ep_0O3qwgeh7mKGjK/view?usp=sharing"
          >
            <Button>Download Resume</Button>
          </Link>
        </div>
      </section>
      <section className="basis-2/5 grid place-items-center ">
        <div className="relative">
          <div className="absolute  bg-sky-100 rounded-full h-[248px] w-[248px] sm:h-[168px] sm:w-[168px] top-0 right-0 "></div>
          <Image
            className="relative sm:h-40 sm:w-40 h-60 w-60 object-cover rounded-full"
            src={heroImage}
            alt="Hero section image"
          />
        </div>
      </section>
    </main>
  )
}
