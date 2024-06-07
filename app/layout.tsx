import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/nav/navbar"
import { ThemeProvider } from "@/components/theme/themeProvider"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Namo's Blog",
  description:
    "Welcome to Namo's Blog, a space where Anish Tharu shares insights on technology, coding, programming, and more.",
  keywords: ["Next.js", "React", "Blog", "Anish", "Anish Tharu"],
  creator: "Anish Tharu",
  openGraph: {
    images: "https://anishblog.vercel.app/../assets/og-image.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
