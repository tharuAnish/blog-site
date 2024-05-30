import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { Suspense } from "react"
import { works } from "@/data/works"
import Image from "next/image"
import { FaArrowRight, FaTags } from "react-icons/fa6"

function WorkContent() {
  return (
    <>
      <section className="mt-10  max-w-[940px] mx-auto ">
        <div className="space-y-6">
          {works.map((work, index) => (
            <div key={work.id}>
              <div className="flex sm:flex-col gap-5">
                <div className="max-w-80 sm:max-w-none">
                  <Image
                    src={work.image}
                    alt={work.title}
                    style={{ width: "", height: "230px" }}
                    className="object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <div className="text-gray-500 dark:text-gray-400 my-2 text-center text-xs flex gap-4">
                    <p className="border text-center rounded-full py-1 px-4">
                      {work.year}
                    </p>{" "}
                    <p className="my-auto flex items-center gap-2">
                      <FaTags />
                      {work.category}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 sm:text-justify">
                    {work.description.slice(0, 200)}...
                  </p>
                  <Button className="mt-6">
                    <Link
                      className="flex gap-3 items-center"
                      href={`/work/${work.id}`}
                    >
                      More Detail <FaArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
              {index < works.length - 1 && <hr className="my-6" />}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default function WorkPage() {
  return (
    <main className="pt-14 max-w-4xl mx-auto sm:mx-4">
      <h1 className="font-bold text-4xl pb-5">Work</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <WorkContent />
      </Suspense>
    </main>
  )
}
