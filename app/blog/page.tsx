import { Metadata } from "next"
import BlogContent from "./blogContent"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "All Blogs's",
  description:
    "Welcome to Namo's Blogs, a space where Anish Tharu shares his Blogs on technology, coding, programming, and more.",
  keywords: ["Next.js", "React", "Blog", "Anish", "Anish Tharu"],
  creator: "Anish Tharu",
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
