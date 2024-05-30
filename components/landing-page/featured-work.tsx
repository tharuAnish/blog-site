import { works } from "@/data/works"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { FaArrowRight, FaTags } from "react-icons/fa6"

const FeaturedWork: React.FC = () => {
  const recentWorks = works.slice(0, 3)

  return (
    <section className="py-11 max-w-[940px] mx-auto ">
      <h2 className="text-2xl sm:mx-4 mb-8">Featured Works</h2>
      <div className="space-y-6 sm:px-4">
        {recentWorks.map((work, index) => (
          <div key={work.id}>
            <div className="flex sm:flex-col gap-5">
              <div className="max-w-80 sm:max-w-none">
                <Image
                  src={work.image}
                  alt={work.title}
                  style={{ width: "", height: "230px" }}
                  className="object-cover rounded-lg "
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <div className="text-gray-500 dark:text-gray-400 my-2 text-center text-xs flex gap-4">
                  <p className="border text-center cursor-pointer rounded-full py-1 px-4">
                    {work.year}
                  </p>{" "}
                  <p className="my-auto cursor-pointer flex items-center gap-2">
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
            {index < recentWorks.length - 1 && <hr className="my-8 sm:my-10" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
