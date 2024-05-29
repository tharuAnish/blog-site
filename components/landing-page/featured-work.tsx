import { works } from "@/data/works"
import Image from "next/image"

const FeaturedWork: React.FC = () => {
  const recentWorks = works.slice(0, 3)

  return (
    <section className="py-11 max-w-[940px] mx-auto ">
      <h2 className="text-2xl  mb-8">Featured Works</h2>
      <div className="space-y-6">
        {recentWorks.map((work, index) => (
          <div key={work.id}>
            <div className="flex items-center space-x-5">
              <div className="max-w-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  style={{ width: "", height: "180px" }}
                  className="object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <div className="text-gray-500 my-3 text-center text-xs flex gap-4">
                  <p className="bg-slate-900 text-center rounded-full py-1 px-4">
                    {work.year}
                  </p>{" "}
                  <p className="my-auto">{work.category}</p>
                </div>
                <p className="text-gray-700">
                  {work.description.slice(0, 200)}...
                </p>
              </div>
            </div>
            {index < recentWorks.length - 1 && <hr className="my-6" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
