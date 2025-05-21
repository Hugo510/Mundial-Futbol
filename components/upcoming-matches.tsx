import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface UpcomingMatchesProps {
  limit?: number
}

export default function UpcomingMatches({ limit }: UpcomingMatchesProps) {
  // Mock data for upcoming matches
  const matches = [
    {
      id: "1",
      date: "15 Mayo, 2025",
      time: "18:00",
      venue: "Estadio Principal",
      teamA: "Equipo A",
      teamB: "Equipo B",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Semifinal",
    },
    {
      id: "2",
      date: "16 Mayo, 2025",
      time: "16:30",
      venue: "Estadio Secundario",
      teamA: "Equipo C",
      teamB: "Equipo D",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Semifinal",
    },
    {
      id: "3",
      date: "17 Mayo, 2025",
      time: "19:00",
      venue: "Estadio Principal",
      teamA: "Equipo E",
      teamB: "Equipo F",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Semifinal",
    },
    {
      id: "4",
      date: "20 Mayo, 2025",
      time: "20:00",
      venue: "Estadio Principal",
      teamA: "Por definir",
      teamB: "Por definir",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
      stage: "Final",
    },
  ]

  const displayMatches = limit ? matches.slice(0, limit) : matches

  return (
    <div className="grid gap-4">
      {displayMatches.map((match) => (
        <Card key={match.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
              <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-end">
                <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image src={match.logoA || "/placeholder.svg"} alt={match.teamA} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-lg">{match.teamA}</h3>
                </div>
              </div>

              <div className="bg-gradient-to-b from-blue-50 to-purple-50 p-4 flex flex-col items-center justify-center text-center">
                <Badge variant="outline" className="mb-2 border-purple-300 text-purple-700">
                  {match.stage}
                </Badge>
                <div className="text-2xl font-bold mb-2">VS</div>
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
                <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <Link href={`/reservation?match=${match.id}`}>Reservar</Link>
                </Button>
              </div>

              <div className="p-4 md:p-6 flex flex-col justify-center items-center md:items-start">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image src={match.logoB || "/placeholder.svg"} alt={match.teamB} width={30} height={30} />
                  </div>
                  <h3 className="font-semibold text-lg">{match.teamB}</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
