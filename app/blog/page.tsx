import { Button } from "@/components/ui/button"
import { blogs } from "@/data/blogs"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

export default function BlogsPage() {
  return (
    <main className="pt-14 max-w-4xl  mx-auto">
      <h1 className="font-bold text-4xl pb-5">Blog</h1>
      <div>
        {blogs.map((blog, index) => (
          <div className="my-11" key={blog.id}>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <div className="text-gray-500 my-3 text-center text-xs flex gap-2">
                <p className="">{blog.date}</p> |
                <p className="my-auto">{blog.categories}</p>
              </div>
              <p className="text-gray-700">
                {blog.description.slice(0, 225)}...
              </p>
              <Button className="mt-3">
                <Link
                  className=" flex gap-3 items-center"
                  href={`blog/${blog.id}`}
                >
                  Continue reading <FaArrowRight />
                </Link>
              </Button>
            </div>
            {index < blogs.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>
    </main>
  )
}
