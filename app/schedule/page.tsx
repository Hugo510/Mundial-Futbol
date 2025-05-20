import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, ListFilter } from "lucide-react"
import UpcomingMatches from "@/components/upcoming-matches"
import PageHeader from "@/components/page-header"

export default function SchedulePage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <PageHeader
        title="Calendario de Partidos"
        description="Consulta los horarios y sedes de todos los partidos del torneo"
        icon={<CalendarDays className="h-8 w-8 text-emerald-700" />}
      />

      <div className="mb-8">
        <Tabs defaultValue="list" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="list">Vista de Lista</TabsTrigger>
              <TabsTrigger value="calendar">Vista de Calendario</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-2">
              <ListFilter className="h-4 w-4" />
              Filtrar
            </Button>
          </div>

          <TabsContent value="list" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <UpcomingMatches />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <Calendar mode="single" className="rounded-md border" />
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-medium text-lg mb-4">Partidos para el día seleccionado</h3>
                    <UpcomingMatches limit={3} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
