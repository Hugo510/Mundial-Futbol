import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, ListFilter } from "lucide-react"
import PageHeader from "@/components/page-header"
import LiveMatches from "@/components/live-matches"
import MatchResults from "@/components/match-results"

export default function ResultsPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <PageHeader
        title="Resultados"
        description="Sigue los resultados en vivo y consulta los marcadores finales"
        icon={<Trophy className="h-8 w-8 text-emerald-700" />}
      />

      <div className="mb-8">
        <Tabs defaultValue="live" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="live">En Vivo</TabsTrigger>
              <TabsTrigger value="completed">Finalizados</TabsTrigger>
              <TabsTrigger value="standings">Clasificación</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-2">
              <ListFilter className="h-4 w-4" />
              Filtrar
            </Button>
          </div>

          <TabsContent value="live" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <LiveMatches />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <MatchResults />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="standings" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">#</th>
                        <th className="text-left py-3 px-4">Equipo</th>
                        <th className="text-center py-3 px-4">PJ</th>
                        <th className="text-center py-3 px-4">G</th>
                        <th className="text-center py-3 px-4">E</th>
                        <th className="text-center py-3 px-4">P</th>
                        <th className="text-center py-3 px-4">GF</th>
                        <th className="text-center py-3 px-4">GC</th>
                        <th className="text-center py-3 px-4">DG</th>
                        <th className="text-center py-3 px-4">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          pos: 1,
                          team: "Equipo A",
                          played: 5,
                          won: 4,
                          drawn: 1,
                          lost: 0,
                          gf: 12,
                          ga: 3,
                          gd: 9,
                          points: 13,
                        },
                        {
                          pos: 2,
                          team: "Equipo B",
                          played: 5,
                          won: 4,
                          drawn: 0,
                          lost: 1,
                          gf: 10,
                          ga: 4,
                          gd: 6,
                          points: 12,
                        },
                        {
                          pos: 3,
                          team: "Equipo C",
                          played: 5,
                          won: 3,
                          drawn: 1,
                          lost: 1,
                          gf: 8,
                          ga: 5,
                          gd: 3,
                          points: 10,
                        },
                        {
                          pos: 4,
                          team: "Equipo D",
                          played: 5,
                          won: 2,
                          drawn: 2,
                          lost: 1,
                          gf: 7,
                          ga: 6,
                          gd: 1,
                          points: 8,
                        },
                        {
                          pos: 5,
                          team: "Equipo E",
                          played: 5,
                          won: 2,
                          drawn: 1,
                          lost: 2,
                          gf: 6,
                          ga: 7,
                          gd: -1,
                          points: 7,
                        },
                        {
                          pos: 6,
                          team: "Equipo F",
                          played: 5,
                          won: 1,
                          drawn: 2,
                          lost: 2,
                          gf: 5,
                          ga: 6,
                          gd: -1,
                          points: 5,
                        },
                        {
                          pos: 7,
                          team: "Equipo G",
                          played: 5,
                          won: 1,
                          drawn: 1,
                          lost: 3,
                          gf: 4,
                          ga: 8,
                          gd: -4,
                          points: 4,
                        },
                        {
                          pos: 8,
                          team: "Equipo H",
                          played: 5,
                          won: 0,
                          drawn: 0,
                          lost: 5,
                          gf: 2,
                          ga: 15,
                          gd: -13,
                          points: 0,
                        },
                      ].map((team) => (
                        <tr key={team.pos} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{team.pos}</td>
                          <td className="py-3 px-4">{team.team}</td>
                          <td className="text-center py-3 px-4">{team.played}</td>
                          <td className="text-center py-3 px-4">{team.won}</td>
                          <td className="text-center py-3 px-4">{team.drawn}</td>
                          <td className="text-center py-3 px-4">{team.lost}</td>
                          <td className="text-center py-3 px-4">{team.gf}</td>
                          <td className="text-center py-3 px-4">{team.ga}</td>
                          <td className="text-center py-3 px-4">{team.gd}</td>
                          <td className="text-center py-3 px-4 font-semibold">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
