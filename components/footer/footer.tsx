import Link from "next/link"
import React from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className=" pb-11 pt-20">
      <div className="container mx-auto text-center">
        <div className="mb-6 flex justify-center gap-6 text-gray-700">
          <Link href="facebook.com" className="  hover:text-gray-900 ">
            <FaSquareFacebook size="36" />
          </Link>
          <Link href="instagram.com" className=" hover:text-gray-900 ">
            <FaInstagram size="36" />
          </Link>
          <Link href="twitter.com" className=" hover:text-gray-900 ">
            <FaSquareTwitter size="36" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tharuanish/"
            className=" hover:text-gray-900 "
          >
            <FaLinkedin size="36" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved to{" "}
          <Link href="https://www.linkedin.com/in/tharuanish/">tharuAnish</Link>
        </p>
      </div>
    </footer>
  )
}