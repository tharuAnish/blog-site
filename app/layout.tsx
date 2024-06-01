import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/nav/navbar"
import { ThemeProvider } from "@/components/theme/themeProvider"
import Footer from "@/components/footer/footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Namo's Blog",
  description:
    "Welcome to Namo's Blog, a space where Anish Tharu shares insights on technology, coding, programming, and more.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Anish Tharu" />
        <meta
          name="description"
          content="Welcome to Namo's Blog, a space where Anish Tharu shares insights on technology, coding, programming, and more."
        />
        <meta
          name="keywords"
          content="Namo's Blog, tech blog, coding, programming, Anish Tharu, technology insights"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Namo's Blog" />
        <meta
          property="og:description"
          content="Welcome to Namo's Blog, a space where Anish Tharu shares insights on technology, coding, programming, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anishblog.vercel.app/" />
        <meta
          property="og:image"
          content="https://anishblog.vercel.app/og-image.jpg"
        />
        <title>Namo's Blog</title>
      </Head>
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
