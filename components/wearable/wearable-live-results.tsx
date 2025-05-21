export default function WearableLiveResults() {
  // Mock data for live matches - simplified
  const liveMatches = [
    {
      id: "1",
      teamA: "EQ A",
      teamB: "EQ B",
      scoreA: 2,
      scoreB: 1,
      minute: "65'",
      progress: 72,
    },
    {
      id: "2",
      teamA: "EQ C",
      teamB: "EQ D",
      scoreA: 0,
      scoreB: 0,
      minute: "23'",
      progress: 26,
    },
  ]

  return (
    <div className="flex h-full w-full flex-col p-2 bg-gradient-to-b from-blue-900 to-purple-900">
      {/* Minimalist header */}
      <div className="mb-2 text-center">
        <h1 className="text-xs font-bold">En Vivo</h1>
      </div>

      {/* Live matches - simplified */}
      <div className="flex flex-1 flex-col gap-2 overflow-auto">
        {liveMatches.length > 0 ? (
          liveMatches.map((match) => (
            <div key={match.id} className="rounded-lg bg-blue-800 p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="rounded bg-pink-500 px-1 text-[8px] font-bold text-white">{match.minute}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] w-6 text-center">{match.teamA}</span>

                <div className="flex gap-1 text-center mx-1">
                  <span className="text-lg font-bold">{match.scoreA}</span>
                  <span className="text-lg font-bold">-</span>
                  <span className="text-lg font-bold">{match.scoreB}</span>
                </div>

                <span className="text-[10px] w-6 text-center">{match.teamB}</span>
              </div>

              {/* Progress bar - simplified */}
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-blue-700">
                <div className="h-full bg-pink-500" style={{ width: `${match.progress}%` }}></div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center text-[10px]">No hay partidos en vivo</p>
          </div>
        )}
      </div>
    </div>
  )
}
