import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/nav/navbar"
import { ThemeProvider } from "@/components/theme/themeProvider"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is a blog page",
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
