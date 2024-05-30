"use client"

import { useSearchParams, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { blogs } from "@/data/blogs"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import SearchBar from "@/components/search/search"
import { useEffect, useState, Suspense } from "react"

function BlogContent() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  useEffect(() => {
    const searchTerm = searchParams.get("search")?.toLowerCase() || ""
    const selectedCategory = searchParams.get("category") || ""

    const newFilteredBlogs = blogs.filter((blog) => {
      const matchesSearchTerm =
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm)
      const matchesCategory =
        selectedCategory === "" || blog.categories.includes(selectedCategory)
      return matchesSearchTerm && matchesCategory
    })

    setFilteredBlogs(newFilteredBlogs)
  }, [searchParams])

  const categories = Array.from(
    new Set(blogs.flatMap((blog) => blog.categories))
  )

  return (
    <>
      <SearchBar categories={categories} />
      <div>
        {filteredBlogs.map((blog, index) => (
          <div className="my-11" key={blog.id}>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <div className="text-gray-500 dark:text-gray-400 my-3 text-center text-xs flex gap-2">
                <p className="">{blog.date}</p> |
                <p className="my-auto">{blog.categories.join(", ")}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                {blog.description.slice(0, 225)}...
              </p>
              <Button className="mt-3">
                <Link
                  className="flex gap-3 items-center"
                  href={`blog/${blog.id}`}
                >
                  Continue reading <FaArrowRight />
                </Link>
              </Button>
            </div>
            {index < filteredBlogs.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>
    </>
  )
}

export default function BlogsPage() {
  return (
    <main className="pt-14 max-w-4xl mx-auto min-h-screen sm:mx-4">
      <h1 className="font-bold text-4xl pb-5 ">Blog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent />
      </Suspense>
    </main>
  )
}
