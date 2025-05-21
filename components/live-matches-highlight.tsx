import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LiveMatchesHighlight() {
  // Mock data for live matches
  const liveMatches = [
    {
      id: "1",
      time: "18:00",
      currentTime: "65'",
      venue: "Estadio Principal",
      teamA: "Equipo A",
      teamB: "Equipo B",
      scoreA: 2,
      scoreB: 1,
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Cuartos de Final",
    },
  ]

  return (
    <div className="grid gap-4">
      {liveMatches.length > 0 ? (
        liveMatches.map((match) => (
          <Card key={match.id} className="overflow-hidden border-2 border-pink-500">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
                <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-end">
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Image src={match.logoA || "/placeholder.svg"} alt={match.teamA} width={40} height={40} />
                    </div>
                    <h3 className="font-semibold text-xl">{match.teamA}</h3>
                    <div className="text-3xl font-bold">{match.scoreA}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-blue-50 to-purple-50 p-4 flex flex-col items-center justify-center text-center">
                  <Badge className="bg-pink-500 mb-2">EN VIVO</Badge>
                  <div className="text-xl font-bold mb-2">VS</div>
                  <div className="bg-pink-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mb-3">
                    {match.currentTime}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Clock className="h-4 w-4" />
                    <span>Inicio: {match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{match.venue}</span>
                  </div>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/results?match=${match.id}`}>Ver Detalles</Link>
                  </Button>
                </div>

                <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-start">
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Image src={match.logoB || "/placeholder.svg"} alt={match.teamB} width={40} height={40} />
                    </div>
                    <h3 className="font-semibold text-xl">{match.teamB}</h3>
                    <div className="text-3xl font-bold">{match.scoreB}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">No hay partidos en vivo en este momento</p>
          <Button asChild variant="outline">
            <Link href="/schedule">Ver Próximos Partidos</Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
