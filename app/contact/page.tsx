"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FC, useState } from "react"
import { FaBuilding, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "United States",
    language: "English (US)",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <main className="pt-14 max-w-5xl mx-auto sm:mx-4">
      <h1 className="font-bold text-4xl pb-11">ContactUs Today</h1>
      <section
        style={{ boxShadow: "2px 5px 22px #0003" }}
        className=" shadow-xl rounded-xl items-center sm:gap-4 sm:p-5 p-10 h-full dark:bg-[#040f2a] flex flex-wrap max-w-5xl mx-auto"
      >
        <section className="h-full sm:hidden sm:mx-auto text-sm flex px-10 gap-5 flex-col basis-2/4 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col border  rounded-lg p-4 w-full items-center  md:mb-0 text-center">
            <FaBuilding size={32} />
            <p className="mt-2">Company information:</p>
            <p>Anish Tharu</p>
            <p>Tax id: USXXXXX</p>
          </div>
          <div className="flex flex-col text-sm p-4 w-full  mx-auto rounded-lg border items-center  md:mb-0 text-center">
            <FaMapMarkerAlt size={32} />
            <p className="mt-2">Address:</p>
            <p>Los angeles, United States</p>
            <p>1941 Late Avenue</p>
            <p>Zip Code/Postal code: 560097</p>
          </div>
          <div className="flex flex-col  mx-auto p-4 rounded-lg border items-center text-center">
            <FaEnvelope size={32} />
            <p className="mt-2">Contact us:</p>
            <p className="">
              Email us for general queries, including marketing and partnership.
            </p>
            <p>tharuanish.vercel.com</p>
          </div>
        </section>
        <section className="basis-2/4  sm:basis-auto  ">
          <form className="space-y-6 sm:space-y-4 border text-sm p-5 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 rounded  w-full border bg-transparent"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 rounded  w-full border bg-transparent"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border bg-transparent"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 rounded border bg-transparent"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="p-2 rounded  w-full border bg-transparent"
              >
                <option className="dark:bg-[#040f2a]" value="United States]">
                  India
                </option>
                <option className="dark:bg-[#040f2a]" value="United States]">
                  United States
                </option>
                <option className="dark:bg-[#040f2a]" value="United States ">
                  Canada
                </option>
                <option className="dark:bg-[#040f2a]" value="United States ">
                  Russia
                </option>
              </select>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="p-2 rounded  w-full border bg-transparent"
              >
                <option className="dark:bg-[#040f2a]" value="English (US) ">
                  English (US)
                </option>
                <option className="dark:bg-[#040f2a]" value="English (US) ">
                  English (UK)
                </option>
                <option className="dark:bg-[#040f2a]" value="English (US) ">
                  Spanish{" "}
                </option>
                <option className="dark:bg-[#040f2a]" value="English (US) ">
                  Hindi
                </option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded border bg-transparent"
            />
            <div className="flex items-center">
              <input type="checkbox" name="terms" className="mr-2" />
              <p className="text-gray-500 dark:text-gray-400">
                I confirm that you have read and agreed to{" "}
                <Link href="#" className="underline text-blue-400">
                  Terms of Service.
                </Link>
              </p>
            </div>
            <Button type="submit" className="w-full p-2  ">
              Send message
            </Button>
          </form>
        </section>
      </section>
      <section className="my-20 w-full dark:filter dark:brightness-75">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.0214385207382!2d77.664129!3d12.8418911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c86072ac00f%3A0xa9f83d961b00093a!2sVenkateswara%20Technopark%2C%202nd%20Cross%20Rd%2C%20Electronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1717068741695!5m2!1sen!2sin"
          height={450}
          className="w-full"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}

export default Contact
