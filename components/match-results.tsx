import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MatchResults() {
  // Mock data for completed matches
  const completedMatches = [
    {
      id: "1",
      date: "10 Mayo, 2025",
      time: "18:00",
      venue: "Estadio Principal",
      teamA: "Equipo A",
      teamB: "Equipo B",
      scoreA: 3,
      scoreB: 1,
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Octavos de Final",
    },
    {
      id: "2",
      date: "10 Mayo, 2025",
      time: "16:30",
      venue: "Estadio Secundario",
      teamA: "Equipo C",
      teamB: "Equipo D",
      scoreA: 2,
      scoreB: 2,
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Octavos de Final",
    },
    {
      id: "3",
      date: "11 Mayo, 2025",
      time: "19:00",
      venue: "Estadio Principal",
      teamA: "Equipo E",
      teamB: "Equipo F",
      scoreA: 0,
      scoreB: 2,
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Octavos de Final",
    },
  ]

  return (
    <div className="grid gap-4">
      {completedMatches.map((match) => (
        <Card key={match.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
              <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-end">
                <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
                    <Image src={match.logoA || "/placeholder.svg"} alt={match.teamA} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-lg">{match.teamA}</h3>
                  <div className="text-2xl font-bold">{match.scoreA}</div>
                </div>
              </div>

              <div className="bg-muted p-4 flex flex-col items-center justify-center text-center">
                <Badge variant="outline" className="mb-2">
                  {match.stage}
                </Badge>
                <div className="text-xl font-bold mb-2">VS</div>
                <Badge variant="secondary" className="mb-3">
                  FINALIZADO
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Clock className="h-4 w-4" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{match.venue}</span>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href={`/results?match=${match.id}`}>Ver Detalles</Link>
                </Button>
              </div>

              <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-start">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
                    <Image src={match.logoB || "/placeholder.svg"} alt={match.teamB} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-lg">{match.teamB}</h3>
                  <div className="text-2xl font-bold">{match.scoreB}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
