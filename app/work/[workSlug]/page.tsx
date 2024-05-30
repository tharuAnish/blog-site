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
    <main className="max-w-4xl px-4 bg-slate-100 py-7 mt-20 mx-auto  rounded-xl shadow-xl">
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold text-center ">
          {work.title}
        </h3>
        <div className="flex gap-6 text-sm justify-center">
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
          className="h-96 object-cover my-7"
          src={work.image || "Image not available"}
          alt={work.title}
        />
        <div className="text-justify whitespace-pre-line">
          {work.longDescription}
        </div>
        <hr className="mb-4 mt-10" />
        <p className="flex justify-end text-sm mr-2">Author: {work.author}</p>
      </div>
    </main>
  )
}

export default workDetail
