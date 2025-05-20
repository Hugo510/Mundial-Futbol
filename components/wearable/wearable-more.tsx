import Link from "next/link"
import { Calendar, Info, MapPin, Trophy } from "lucide-react"

export default function WearableMore() {
  const menuItems = [
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Calendario",
      href: "/schedule",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Reservaciones",
      href: "/reservation",
    },
    {
      icon: <Trophy className="h-4 w-4" />,
      label: "Resultados",
      href: "/results",
    },
    {
      icon: <Info className="h-4 w-4" />,
      label: "Información",
      href: "/info",
    },
  ]

  return (
    <div className="flex h-full w-full flex-col p-2">
      {/* Header */}
      <div className="mb-2 text-center">
        <h1 className="text-xs font-bold">Más Opciones</h1>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} className="flex items-center gap-2 rounded-lg bg-emerald-900 p-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-800">{item.icon}</div>
            <span className="text-[10px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
