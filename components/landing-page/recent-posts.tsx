import { blogs } from "@/data/blogs"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

const RecentPosts: React.FC = () => {
  // Sort blogs by date in descending order
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  // Get the two most recent blogs
  const recentBlogs = sortedBlogs.slice(0, 2)

  // Function to truncate description to 25 words
  const truncateDescription = (description: string) => {
    const words = description.split(" ")
    if (words.length > 25) {
      return words.slice(0, 25).join(" ") + " ..."
    }
    return description
  }

  return (
    <div className="pt-11 pb-20 bg-sky-100 dark:bg-[#030b20]">
      <main className="max-w-[940px] mx-auto ">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl mb-4">Recent posts</h2>
          <Link className="text-sky-500 flex gap-3 items-center" href="/blog">
            View all <FaArrowRight />
          </Link>
        </div>
        <div className="flex justify-center gap-9 ">
          {recentBlogs.map((blog, id) => (
            <div
              key={id}
              className="bg-white dark:bg-[#040f2a] p-6 w-[450px] rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm my-4 ">
                {blog.date} | {blog.categories.join(", ")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                {truncateDescription(blog.description)}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default RecentPosts
