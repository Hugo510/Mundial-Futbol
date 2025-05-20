import { Clock, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WearableDashboard() {
  // Mock data for next match
  const nextMatch = {
    id: "1",
    date: "15 Mayo",
    time: "18:00",
    teamA: "Equipo A",
    teamB: "Equipo B",
    logoA: "/placeholder.svg?height=40&width=40",
    logoB: "/placeholder.svg?height=40&width=40",
    countdown: "2d 4h 35m",
  }

  // Mock data for live match
  const liveMatch = {
    id: "2",
    teamA: "Equipo C",
    teamB: "Equipo D",
    scoreA: 2,
    scoreB: 1,
    minute: "65'",
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-between p-2">
      {/* Header */}
      <div className="mb-1 text-center">
        <div className="flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-emerald-700"></div>
          <h1 className="ml-1 text-xs font-bold">Mundial Escolar</h1>
        </div>
      </div>

      {/* Next match countdown */}
      <div className="mb-2 w-full">
        <h2 className="mb-1 text-center text-[10px] font-medium text-emerald-400">PRÓXIMO PARTIDO</h2>
        <div className="flex items-center justify-center gap-1 text-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900">
            <Image src={nextMatch.logoA || "/placeholder.svg"} alt={nextMatch.teamA} width={16} height={16} />
          </div>
          <span className="text-xs font-bold">VS</span>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900">
            <Image src={nextMatch.logoB || "/placeholder.svg"} alt={nextMatch.teamB} width={16} height={16} />
          </div>
        </div>
        <div className="mt-1 flex items-center justify-center gap-2 text-[10px]">
          <div className="flex items-center">
            <Calendar className="mr-0.5 h-3 w-3 text-emerald-400" />
            <span>{nextMatch.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-0.5 h-3 w-3 text-emerald-400" />
            <span>{nextMatch.time}</span>
          </div>
        </div>
        <div className="mt-1 text-center text-xs font-bold text-amber-500">{nextMatch.countdown}</div>
      </div>

      {/* Live score ticker */}
      {liveMatch ? (
        <div className="mb-2 w-full rounded-lg bg-emerald-900 p-2">
          <div className="mb-1 flex items-center justify-center">
            <span className="mr-1 rounded bg-amber-500 px-1 py-0.5 text-[8px] font-bold text-black">EN VIVO</span>
            <span className="text-[8px]">{liveMatch.minute}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-center">
              <div className="mb-1 h-5 w-5 rounded-full bg-emerald-800 p-1">
                <Image src="/placeholder.svg?height=20&width=20" alt={liveMatch.teamA} width={16} height={16} />
              </div>
              <span className="text-[10px]">{liveMatch.teamA}</span>
            </div>
            <div className="flex gap-1 text-center">
              <span className="text-lg font-bold">{liveMatch.scoreA}</span>
              <span className="text-lg font-bold">-</span>
              <span className="text-lg font-bold">{liveMatch.scoreB}</span>
            </div>
            <div className="text-center">
              <div className="mb-1 h-5 w-5 rounded-full bg-emerald-800 p-1">
                <Image src="/placeholder.svg?height=20&width=20" alt={liveMatch.teamB} width={16} height={16} />
              </div>
              <span className="text-[10px]">{liveMatch.teamB}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-2 w-full rounded-lg bg-emerald-900 p-2 text-center">
          <p className="text-[10px]">No hay partidos en vivo</p>
        </div>
      )}

      {/* Quick action button */}
      <Link
        href="/reservation"
        className="mb-1 w-full rounded-lg bg-amber-500 py-2 text-center text-xs font-bold text-black"
      >
        RESERVAR LUGAR
      </Link>
    </div>
  )
}
