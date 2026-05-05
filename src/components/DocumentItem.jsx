import { FileText } from "lucide-react"

export default function DocumentItem({ item, color }) {

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

  const current = styles[color] || styles.blue

  return (
    <a
      href={item.file}
      target="_blank"
      className={`flex items-center gap-4 p-4 border rounded-xl transition duration-300 hover:shadow-md ${current.gradient} ${current.border}`}
    >
      {/* ICON */}
      <div className={`p-3 rounded-lg text-white ${current.iconBg}`}>
        <FileText className="w-5 h-5" />
      </div>

      {/* TEXT */}
      <span className={`text-base md:text-lg ${current.text}`}>
        {item.title}
      </span>
    </a>
  )
}