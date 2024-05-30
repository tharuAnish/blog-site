"use client"

import { useEffect, useState } from "react"
import { useSearchParams, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  categories: string[]
}

const SearchBar: React.FC<SearchBarProps> = ({ categories }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  )
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || ""
  )

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "")
    setSelectedCategory(searchParams.get("category") || "")
  }, [searchParams])

  const updateQuery = (params: { [key: string]: string }) => {
    const url = new URL(window.location.toString())
    Object.keys(params).forEach((key) => url.searchParams.set(key, params[key]))
    window.history.pushState({}, "", url)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    updateQuery({ search: term, category: selectedCategory })
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    updateQuery({ search: searchTerm, category })
  }

  return (
    <div className="flex items-center gap-2 mb-6  py-4 rounded-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title or description"
        className="flex-1 p-2 rounded-lg border "
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 rounded-lg border"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Button className="rounded-lg">Search</Button>
    </div>
  )
}

export default SearchBar
