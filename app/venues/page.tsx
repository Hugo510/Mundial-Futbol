import { MapPin } from "lucide-react"

export default function VenuesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-5">Venue Information</h1>
      <p className="text-sm text-muted-foreground mb-3">
        Ubicado en el centro deportivo municipal, cuenta con capacidad para 2,000 espectadores.
      </p>
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <MapPin className="h-4 w-4 mr-2" />
        <span>Av. Principal #1000, Durango, México</span>
      </div>
    </div>
  )
}
