import Image from "next/image"

export default function WearableLiveResults() {
  // Mock data for live matches
  const liveMatches = [
    {
      id: "1",
      teamA: "Equipo A",
      teamB: "Equipo B",
      scoreA: 2,
      scoreB: 1,
      minute: "65'",
      progress: 72,
    },
    {
      id: "2",
      teamA: "Equipo C",
      teamB: "Equipo D",
      scoreA: 0,
      scoreB: 0,
      minute: "23'",
      progress: 26,
    },
  ]

  return (
    <div className="flex h-full w-full flex-col p-2">
      {/* Header */}
      <div className="mb-2 text-center">
        <h1 className="text-xs font-bold">Resultados en Vivo</h1>
      </div>

      {/* Live matches */}
      <div className="flex flex-1 flex-col gap-2 overflow-auto">
        {liveMatches.length > 0 ? (
          liveMatches.map((match) => (
            <div key={match.id} className="rounded-lg border border-amber-500 bg-emerald-900 p-2">
              <div className="mb-1 flex items-center justify-between">
                <span className="rounded bg-amber-500 px-1 py-0.5 text-[8px] font-bold text-black">EN VIVO</span>
                <span className="text-[8px]">{match.minute}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="mb-1 h-6 w-6 rounded-full bg-emerald-800 p-1">
                    <Image src="/placeholder.svg?height=20&width=20" alt={match.teamA} width={16} height={16} />
                  </div>
                  <span className="text-[10px]">{match.teamA}</span>
                </div>

                <div className="flex gap-1 text-center">
                  <span className="text-lg font-bold">{match.scoreA}</span>
                  <span className="text-lg font-bold">-</span>
                  <span className="text-lg font-bold">{match.scoreB}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="mb-1 h-6 w-6 rounded-full bg-emerald-800 p-1">
                    <Image src="/placeholder.svg?height=20&width=20" alt={match.teamB} width={16} height={16} />
                  </div>
                  <span className="text-[10px]">{match.teamB}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-emerald-800">
                <div className="h-full bg-amber-500" style={{ width: `${match.progress}%` }}></div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-1 items-center justify-center rounded-lg bg-emerald-900 p-2">
            <p className="text-center text-[10px]">No hay partidos en vivo en este momento</p>
          </div>
        )}
      </div>
    </div>
  )
}
