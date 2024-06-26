import { works } from "@/data/works"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FaTags } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md"
import { generateImageUrl } from "@/lib/utils"

interface workProps {
  params: {
    workSlug: string
  }
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"

// Dynamic Metadata
export async function generateMetadata({ params }: workProps) {
  const work = works.find((b) => b.id === parseInt(params.workSlug))

  if (!work) {
    notFound()
  }

  return {
    title: work.title,
    description: work.description,
    creator: work.author,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [
        {
          url: generateImageUrl(work.image),
          width: 800,
          height: 600,
          alt: work.title,
        },
      ],
    },
  }
}
const workDetail = ({ params }: workProps) => {
  const work = works.find((b) => b.id === parseInt(params.workSlug))

  if (!work) {
    return notFound()
  }

  return (
    <main className="max-w-4xl px-2 sm:mx-1 py-7 mt-14 mx-auto ">
      <div className="  ">
        <h3 className="pt-3 pb-6 text-4xl font-semibold ">{work.title}</h3>
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
          className="h-[450px] sm:h-60 object-cover my-9"
          src={work.image || "Image not available"}
          alt={work.title}
        />
        <div className="text-justify sm:px-1 whitespace-pre-line text-gray-800 dark:text-gray-300">
          {work.longDescription}
        </div>
        <hr className="mb-4 mt-10 sm:hidden" />
        <p className="flex justify-end sm:mt-10 text-sm mr-2 text-gray-500 dark:text-gray-400">
          Author: {work.author}
        </p>
      </div>
    </main>
  )
}

export default workDetail
