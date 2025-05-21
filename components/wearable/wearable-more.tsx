import Link from "next/link"
import { Calendar, Trophy, Info } from "lucide-react"

export default function WearableMore() {
  // Simplified menu items - only the most important
  const menuItems = [
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Calendario",
      href: "/schedule",
    },
    {
      icon: <Trophy className="h-4 w-4" />,
      label: "Resultados",
      href: "/results",
    },
    {
      icon: <Info className="h-4 w-4" />,
      label: "Info",
      href: "/info",
    },
  ]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 bg-gradient-to-b from-blue-900 to-purple-900">
      {/* Minimalist header */}
      <div className="absolute top-1 left-0 right-0 text-center">
        <h1 className="text-xs font-bold">Más</h1>
      </div>

      {/* Simplified menu */}
      <div className="flex flex-col gap-3 w-full">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-800 py-2"
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
