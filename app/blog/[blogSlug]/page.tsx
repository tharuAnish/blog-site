import { blogs } from "@/data/blogs"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FaTags } from "react-icons/fa6"
import { MdDateRange } from "react-icons/md"

interface BlogProps {
  params: {
    blogSlug: string
  }
}

const BlogDetail = ({ params }: BlogProps) => {
  const blog = blogs.find((b) => b.id === parseInt(params.blogSlug))

  if (!blog) {
    return notFound()
  }

  return (
    <main
      style={{ boxShadow: "2px 5px 22px #0003" }}
      className="max-w-4xl px-4 bg-slate-50 sm:mx-2 dark:bg-[#04112f] py-7 sm:px-2 mt-20 mx-auto  rounded-xl "
    >
      <div className="  ">
        <h3 className="py-3 text-4xl font-semibold text-center ">
          {blog.title}
        </h3>
        <div className="flex gap-6 text-sm justify-center text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <MdDateRange />
            {blog.date}
          </p>
          <p className="flex items-center gap-2">
            <FaTags />
            {blog.categories.join(", ")}
          </p>
        </div>
        <Image
          className="h-96 sm:h-72 object-cover my-9 sm:mt-8 sm:mb-5"
          src={blog.image || "Image not available"}
          alt={blog.title}
        />
        <div className="text-justify whitespace-pre-line px-2 text-gray-700 dark:text-gray-300">
          {blog.longDescription}
        </div>
        <hr className="mb-4 mt-10" />
        <p className="flex justify-end text-sm mr-2 text-gray-500 ">
          Author: {blog.author}
        </p>
      </div>
    </main>
  )
}

export default BlogDetail
