import { works } from "@/data/works"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FaTags } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md"

interface workProps {
  params: {
    workSlug: string
  }
}

const workDetail = ({ params }: workProps) => {
  const work = works.find((b) => b.id === parseInt(params.workSlug))

  if (!work) {
    return notFound()
  }

  return (
    <main className="max-w-4xl px-2  py-7 mt-14 mx-auto ">
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold ">{work.title}</h3>
        <div className="flex gap-6 text-sm  mb-7 text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <MdDateRange />
            {work.year}
          </p>
          <p className="flex items-center gap-2">
            <FaTags />
            {work.category}
          </p>
        </div>
        <Image
          className="h-[450px] object-cover my-9"
          src={work.image || "Image not available"}
          alt={work.title}
        />
        <div className="text-justify whitespace-pre-line text-gray-800 dark:text-gray-300">
          {work.longDescription}
        </div>
        <hr className="mb-4 mt-10" />
        <p className="flex justify-end text-sm mr-2 text-gray-500 dark:text-gray-400">
          Author: {work.author}
        </p>
      </div>
    </main>
  )
}

export default workDetail