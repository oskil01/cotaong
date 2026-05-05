import { useState } from "react"
import { FileText } from "lucide-react"

import DocumentItem from "./DocumentItem"

export default function Block({ title, items, color }) {
  const [page, setPage] = useState(1)
  const itemsPerPage = 4

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const start = (page - 1) * itemsPerPage
  const currentItems = items.slice(start, start + itemsPerPage)

  // 🎨 Styles par couleur
  const styles = {
    blue: {
      gradient: "bg-gradient-to-r from-blue-100/40 to-white",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-500",
    },
    red: {
      gradient: "bg-gradient-to-r from-red-100/40 to-white",
      border: "border-red-200",
      text: "text-red-700",
      iconBg: "bg-red-500",
    },
    green: {
      gradient: "bg-gradient-to-r from-green-100/40 to-white",
      border: "border-green-200",
      text: "text-green-700",
      iconBg: "bg-green-500",
    },
  }

  const current = styles[color]

  return (
    <div>
      {/* HEADER + PAGINATION */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-lg md:text-xl">{title}</h4>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-2 text-sm transition ${
                page === i + 1
                  ? "font-bold text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* LISTE */}
      <div className="space-y-3">
        {currentItems.map((item, i) => (
          <a
            key={i}
            href={item.file}
            target="_blank"
            className={`flex items-center gap-4 p-4 border rounded-xl transition duration-300 hover:shadow-md ${current.gradient} ${current.border}`}
          >
            {/* ICON */}
            <div
              className={`p-3 rounded-lg text-white ${current.iconBg}`}
            >
              <FileText className="w-5 h-5" />
            </div>

            {/* TEXT */}
            <span className={`text-base md:text-lg ${current.text}`}>
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}