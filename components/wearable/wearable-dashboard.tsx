import { Clock } from "lucide-react"
import Image from "next/image"

export default function WearableDashboard() {
  // Mock data for next match
  const nextMatch = {
    id: "1",
    time: "18:00",
    teamA: "EQ A",
    teamB: "EQ B",
    logoA: "/placeholder.svg?height=40&width=40",
    logoB: "/placeholder.svg?height=40&width=40",
    countdown: "2d 4h",
  }

  // Mock data for live match
  const liveMatch = {
    id: "2",
    teamA: "EQ C",
    teamB: "EQ D",
    scoreA: 2,
    scoreB: 1,
    minute: "65'",
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 bg-gradient-to-b from-blue-900 to-purple-900">
      {/* Minimalist header - just the title */}
      <div className="absolute top-1 left-0 right-0 text-center">
        <h1 className="text-xs font-bold">Mundial</h1>
      </div>

      {/* Next match - simplified */}
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800">
            <Image src={nextMatch.logoA || "/placeholder.svg"} alt={nextMatch.teamA} width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-pink-400">{nextMatch.countdown}</span>
            <span className="text-[10px]">{nextMatch.time}</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800">
            <Image src={nextMatch.logoB || "/placeholder.svg"} alt={nextMatch.teamB} width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Live score - simplified */}
      {liveMatch ? (
        <div className="w-full rounded-lg bg-blue-800 p-2">
          <div className="mb-1 flex items-center justify-center">
            <span className="rounded bg-pink-500 px-1 py-0.5 text-[8px] font-bold text-white">LIVE</span>
            <span className="ml-1 text-[8px]">{liveMatch.minute}</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center w-8">
              <span className="text-[10px]">{liveMatch.teamA}</span>
            </div>
            <div className="flex gap-1 mx-2 text-center">
              <span className="text-xl font-bold">{liveMatch.scoreA}</span>
              <span className="text-xl font-bold">-</span>
              <span className="text-xl font-bold">{liveMatch.scoreB}</span>
            </div>
            <div className="text-center w-8">
              <span className="text-[10px]">{liveMatch.teamB}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-lg bg-blue-800 p-2 text-center">
          <p className="text-[10px]">No hay partidos en vivo</p>
        </div>
      )}

      {/* Time indicator at the bottom */}
      <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
        <Clock className="h-3 w-3 text-blue-300 mr-1" />
        <span className="text-[8px] text-blue-300">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  )
}
