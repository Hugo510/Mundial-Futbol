import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import UpcomingMatches from "@/components/upcoming-matches"
import LiveMatchesHighlight from "@/components/live-matches-highlight"

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl mb-12">
        <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 p-8 md:p-12 lg:p-16 rounded-xl">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Mundial Escolar de Fútbol</h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8">
              Bienvenidos al torneo escolar organizado por el Comité Organizador de Mundial Escolar de Fútbol. Consulta
              horarios, reserva tu lugar y sigue los resultados en vivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/schedule">Ver Calendario</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                <Link href="/reservation">Reservar Lugar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Modules */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="border-blue-200 hover:border-blue-400 transition-colors">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <CalendarDays className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Calendario de Partidos</h3>
              <p className="text-muted-foreground mb-4">Consulta los próximos encuentros y horarios</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/schedule">Ver Calendario</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 hover:border-purple-400 transition-colors">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reservaciones</h3>
              <p className="text-muted-foreground mb-4">Asegura tu lugar para los partidos</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/reservation">Reservar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 hover:border-pink-400 transition-colors">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 p-3 rounded-full mb-4">
                <Trophy className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Resultados en Vivo</h3>
              <p className="text-muted-foreground mb-4">Sigue los marcadores en tiempo real</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/results">Ver Resultados</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-teal-200 hover:border-teal-400 transition-colors">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Información General</h3>
              <p className="text-muted-foreground mb-4">Reglas, equipos y más información</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/info">Ver Información</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Live Matches Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Partidos en Vivo</h2>
          <Button asChild variant="link" className="text-blue-600">
            <Link href="/results">Ver Todos</Link>
          </Button>
        </div>
        <LiveMatchesHighlight />
      </section>

      {/* Upcoming Matches Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Próximos Partidos</h2>
          <Button asChild variant="link" className="text-blue-600">
            <Link href="/schedule">Ver Calendario Completo</Link>
          </Button>
        </div>
        <UpcomingMatches limit={3} />
      </section>

      {/* Tournament Info */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Sobre el Torneo</h2>
          <p className="text-muted-foreground mb-4">
            El Mundial Escolar de Fútbol es un evento organizado por el Comité Organizador de Mundial Escolar de Fútbol.
          </p>
          <p className="text-muted-foreground mb-6">
            Este torneo reúne a las mejores escuelas de la región en una competencia que promueve el deporte, el
            compañerismo y los valores deportivos.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/info">Conoce Más</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Torneo de Fútbol" fill className="object-cover" />
        </div>
      </section>
    </div>
  )
}
