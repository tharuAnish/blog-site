import FeaturedWork from "@/components/landing-page/featured-work"
import HeroSection from "@/components/landing-page/hero-section"
import RecentPosts from "@/components/landing-page/recent-posts"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
    </>
  )
}
