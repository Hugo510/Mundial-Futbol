import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info, MapPin, HelpCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function InfoPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <PageHeader
        title="Información General"
        description="Todo lo que necesitas saber sobre el torneo"
        icon={<Info className="h-8 w-8 text-emerald-700" />}
      />

      <div className="mb-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="about">Sobre el Torneo</TabsTrigger>
            <TabsTrigger value="teams">Equipos</TabsTrigger>
            <TabsTrigger value="rules">Reglamento</TabsTrigger>
            <TabsTrigger value="venues">Sedes</TabsTrigger>
            <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Mundial Escolar de Fútbol</h3>
                    <p className="text-muted-foreground mb-4">
                      El Mundial Escolar de Fútbol es un evento organizado por el Comité Organizador de Mundial Escolar
                      de Fútbol.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Este torneo reúne a las mejores escuelas de la región en una competencia que promueve el deporte,
                      el compañerismo y los valores deportivos.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Con más de 20 equipos participantes, el torneo se desarrolla a lo largo de tres semanas con
                      partidos emocionantes que culminan en una gran final.
                    </p>
                    <div className="flex gap-4 mt-6">
                      <Button className="bg-emerald-700 hover:bg-emerald-800">Contactar</Button>
                      <Button variant="outline">Descargar Programa</Button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Torneo de Fútbol"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Organizadores</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <Image src="/placeholder.svg?height=100&width=100" alt="Logo Comité" width={60} height={60} />
                      </div>
                      <h4 className="font-medium mb-2">Comité Organizador</h4>
                      <p className="text-sm text-muted-foreground">
                        Encargado de la planificación y ejecución del torneo
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Logo Patrocinadores"
                          width={60}
                          height={60}
                        />
                      </div>
                      <h4 className="font-medium mb-2">Patrocinadores</h4>
                      <p className="text-sm text-muted-foreground">Empresas e instituciones que apoyan el evento</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Logo Voluntarios"
                          width={60}
                          height={60}
                        />
                      </div>
                      <h4 className="font-medium mb-2">Voluntarios</h4>
                      <p className="text-sm text-muted-foreground">Equipo de apoyo para la realización del torneo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((team) => (
                    <div key={team} className="border rounded-lg p-4 hover:border-emerald-400 transition-colors">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt={`Equipo ${team}`}
                            width={40}
                            height={40}
                          />
                        </div>
                        <h4 className="font-medium mb-1">Equipo {team}</h4>
                        <p className="text-xs text-muted-foreground mb-3">Escuela {team}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Ver Plantel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Reglamento del Torneo</h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Reglas Generales</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Los partidos tendrán una duración de 2 tiempos de 45 minutos cada uno.</li>
                        <li>Cada equipo podrá realizar hasta 5 sustituciones por partido.</li>
                        <li>Se aplicará el reglamento FIFA vigente para todas las situaciones de juego.</li>
                        <li>Los equipos deberán presentarse 30 minutos antes del inicio del partido.</li>
                        <li>El uso de espinilleras es obligatorio para todos los jugadores.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Sistema de Competencia</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>El torneo se dividirá en fase de grupos y fase eliminatoria.</li>
                        <li>En la fase de grupos, cada equipo jugará contra todos los demás de su grupo.</li>
                        <li>Los dos mejores equipos de cada grupo avanzarán a la fase eliminatoria.</li>
                        <li>La fase eliminatoria consistirá en cuartos de final, semifinales y final.</li>
                        <li>En caso de empate en la fase eliminatoria, se procederá a tiros penales directamente.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Puntuación</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Victoria: 3 puntos</li>
                        <li>Empate: 1 punto</li>
                        <li>Derrota: 0 puntos</li>
                        <li>
                          En caso de empate en puntos, se considerará: diferencia de goles, goles a favor, resultado
                          entre los equipos empatados y fair play.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Sanciones</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Tarjeta amarilla: Amonestación</li>
                        <li>
                          Dos tarjetas amarillas en un mismo partido: Expulsión y suspensión para el siguiente partido
                        </li>
                        <li>
                          Tarjeta roja directa: Expulsión y suspensión mínima de un partido, sujeto a revisión del
                          comité disciplinario
                        </li>
                        <li>
                          Acumulación de 3 tarjetas amarillas en diferentes partidos: Suspensión para el siguiente
                          partido
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Elegibilidad de Jugadores</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Todos los jugadores deben estar inscritos en la institución educativa que representan.</li>
                        <li>La edad máxima permitida es de 18 años cumplidos al inicio del torneo.</li>
                        <li>Cada equipo podrá registrar un máximo de 22 jugadores para el torneo.</li>
                        <li>No se permitirán cambios en el registro una vez iniciado el torneo.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8">
                  <Button className="bg-emerald-700 hover:bg-emerald-800">Descargar Reglamento Completo</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="venues" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Sedes del Torneo</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2].map((venue) => (
                    <div key={venue} className="border rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt={`Sede ${venue}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-lg mb-2">Estadio {venue}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Ubicado en el centro deportivo de la Universidad Tecnológica de Durango, cuenta con capacidad
                          para 2,000 espectadores.
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Av. Universidad #1000, Durango, México</span>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            Ver Mapa
                          </Button>
                          <Button variant="outline" size="sm">
                            Cómo Llegar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border rounded-lg p-4">
                  <h4 className="font-medium mb-4">Información Adicional</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Estacionamiento disponible para todos los asistentes</li>
                    <li>• Servicio de alimentos y bebidas en todas las sedes</li>
                    <li>• Acceso para personas con discapacidad</li>
                    <li>• Transporte público disponible cerca de todas las sedes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Preguntas Frecuentes</h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>¿Cómo puedo comprar boletos para los partidos?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Los boletos están disponibles en línea a través de nuestra plataforma de reservaciones. También
                        puedes adquirirlos directamente en las taquillas de las sedes el día del evento, sujeto a
                        disponibilidad.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2">
                    <AccordionTrigger>¿Hay descuentos para estudiantes?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Sí, los estudiantes con credencial vigente tienen un 50% de descuento en todos los partidos.
                        También hay descuentos para grupos escolares y profesores.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3">
                    <AccordionTrigger>¿Puedo cancelar o cambiar mi reservación?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Las reservaciones pueden ser canceladas o modificadas hasta 24 horas antes del partido. Para
                        hacerlo, ingresa a tu cuenta en nuestra plataforma o contacta a nuestro servicio de atención al
                        cliente.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4">
                    <AccordionTrigger>
                      ¿Qué debo hacer si mi equipo quiere participar en el próximo torneo?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Las inscripciones para el próximo torneo se abrirán tres meses antes del inicio. Deberás
                        completar el formulario de registro en nuestra página web y cumplir con los requisitos de
                        elegibilidad.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5">
                    <AccordionTrigger>¿Se permiten alimentos y bebidas del exterior?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Se permite el ingreso de alimentos y bebidas no alcohólicas en cantidades personales. No se
                        permite el ingreso de envases de vidrio, latas o cualquier objeto que pueda ser utilizado como
                        proyectil.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-6">
                    <AccordionTrigger>¿Hay transmisión en vivo de los partidos?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Sí, todos los partidos son transmitidos en vivo a través de nuestra página web y redes sociales
                        oficiales. También puedes seguir los resultados en tiempo real en nuestra aplicación móvil.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-emerald-700 mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">¿No encuentras lo que buscas?</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Si tienes alguna pregunta adicional, no dudes en contactarnos. Estamos aquí para ayudarte.
                      </p>
                      <Button className="bg-emerald-700 hover:bg-emerald-800">Contactar</Button>
                    </div>
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
