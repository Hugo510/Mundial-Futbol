"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ticket } from "lucide-react"
import PageHeader from "@/components/page-header"
import SeatMap from "@/components/seat-map"
import MatchSelector from "@/components/match-selector"

export default function ReservationPage() {
  const [step, setStep] = useState(1)
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [ticketCount, setTicketCount] = useState(1)

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <PageHeader
        title="Reservación de Lugares"
        description="Reserva tu lugar para los partidos del torneo"
        icon={<Ticket className="h-8 w-8 text-emerald-700" />}
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="hidden sm:flex items-center gap-4">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 1 ? "bg-emerald-700 text-white" : "bg-muted text-muted-foreground"}`}
            >
              1
            </div>
            <div className={`h-0.5 w-12 ${step >= 2 ? "bg-emerald-700" : "bg-muted"}`}></div>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 2 ? "bg-emerald-700 text-white" : "bg-muted text-muted-foreground"}`}
            >
              2
            </div>
            <div className={`h-0.5 w-12 ${step >= 3 ? "bg-emerald-700" : "bg-muted"}`}></div>
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 3 ? "bg-emerald-700 text-white" : "bg-muted text-muted-foreground"}`}
            >
              3
            </div>
          </div>
          <div className="sm:hidden text-sm text-muted-foreground">Paso {step} de 3</div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecciona un Partido</CardTitle>
              <CardDescription>Elige el partido para el que deseas reservar lugares</CardDescription>
            </CardHeader>
            <CardContent>
              <MatchSelector onSelectMatch={(id) => setSelectedMatch(id)} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled>
                Atrás
              </Button>
              <Button
                onClick={handleContinue}
                disabled={!selectedMatch}
                className="bg-emerald-700 hover:bg-emerald-800"
              >
                Continuar
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecciona tus Lugares</CardTitle>
              <CardDescription>Elige la cantidad de boletos o selecciona asientos específicos</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="quantity" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="quantity">Cantidad</TabsTrigger>
                  <TabsTrigger value="seats">Mapa de Asientos</TabsTrigger>
                </TabsList>

                <TabsContent value="quantity">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-count">Número de Boletos</Label>
                      <Select defaultValue="1" onValueChange={(value) => setTicketCount(Number.parseInt(value))}>
                        <SelectTrigger id="ticket-count">
                          <SelectValue placeholder="Selecciona la cantidad" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "boleto" : "boletos"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="section">Sección</Label>
                      <Select defaultValue="general">
                        <SelectTrigger id="section">
                          <SelectValue placeholder="Selecciona la sección" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="preferente">Preferente</SelectItem>
                          <SelectItem value="vip">VIP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="seats">
                  <div className="space-y-4">
                    <SeatMap onSelectSeats={(seats) => setSelectedSeats(seats)} />
                    <p className="text-sm text-muted-foreground">
                      Asientos seleccionados: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "Ninguno"}
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Atrás
              </Button>
              <Button
                onClick={handleContinue}
                disabled={!(ticketCount > 0 || selectedSeats.length > 0)}
                className="bg-emerald-700 hover:bg-emerald-800"
              >
                Continuar
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Completa tus datos para finalizar la reservación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombre</Label>
                    <Input id="first-name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellido</Label>
                    <Input id="last-name" placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="Tu número de teléfono" />
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="font-medium mb-2">Resumen de Reservación</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partido:</span>
                      <span>Semifinal - Equipo A vs Equipo B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fecha:</span>
                      <span>15 de Mayo, 2025 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Boletos:</span>
                      <span>{selectedSeats.length > 0 ? selectedSeats.length : ticketCount}</span>
                    </div>
                    {selectedSeats.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Asientos:</span>
                        <span>{selectedSeats.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Atrás
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-600">Confirmar Reservación</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
