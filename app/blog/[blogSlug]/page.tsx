import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"

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
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div>{blog.description}</div>
    </div>
  )
}

export default BlogDetail
