"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/theme/toggle"
import { MdMenu } from "react-icons/md"
import { FaX } from "react-icons/fa6"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    } else {
      document.removeEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const getLinkClass = (path: string) => {
    return pathname.startsWith(path)
      ? "py-2 px-3 text-[#DC2626] dark:text-[#DC2626]"
      : "py-2 px-3 dark:hover:text-gray-300  hover:text-gray-500"
  }

  return (
    <nav className="bg-white  dark:bg-[#040d25] relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
            BlogPage
          </span>
        </Link>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaX /> : <MdMenu size="2xl" />}
        </button>
        <div
          ref={navbarRef}
          className={`absolute top-16 left-0 w-full bg-white z-50  dark:bg-[#040d25] md:static md:block md:w-auto ${
            isOpen ? "block p-5" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col gap-1 md:p-0 mt-4 border items-center rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700${
              isOpen ? "px-5 py-8 gap-6" : ""
            }`}
          >
            <li>
              <Link
                href="/blog"
                className={getLinkClass("/blog")}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={getLinkClass("/work")}
                onClick={handleLinkClick}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={getLinkClass("/contact")}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
