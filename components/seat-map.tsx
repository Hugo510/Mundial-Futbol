"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SeatMapProps {
  onSelectSeats: (seats: string[]) => void
}

export default function SeatMap({ onSelectSeats }: SeatMapProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  // Generate seat layout
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
  const seatsPerRow = 12

  // Mock data for unavailable seats
  const unavailableSeats = ["A3", "A4", "B7", "B8", "C5", "D10", "E2", "F6", "G11", "H1"]

  const toggleSeat = (seat: string) => {
    if (unavailableSeats.includes(seat)) return

    if (selectedSeats.includes(seat)) {
      const newSelected = selectedSeats.filter((s) => s !== seat)
      setSelectedSeats(newSelected)
      onSelectSeats(newSelected)
    } else {
      const newSelected = [...selectedSeats, seat]
      setSelectedSeats(newSelected)
      onSelectSeats(newSelected)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-muted p-3 text-center rounded-lg mb-6">ESCENARIO / CANCHA</div>

      <div className="grid gap-4 mb-6">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-1">
            <div className="w-6 text-center font-medium">{row}</div>
            {Array.from({ length: seatsPerRow }).map((_, index) => {
              const seatNumber = index + 1
              const seat = `${row}${seatNumber}`
              const isUnavailable = unavailableSeats.includes(seat)
              const isSelected = selectedSeats.includes(seat)

              return (
                <Button
                  key={seat}
                  variant="outline"
                  size="icon"
                  className={cn(
                    "w-7 h-7 p-0",
                    isUnavailable ? "bg-muted text-muted-foreground cursor-not-allowed" : "",
                    isSelected
                      ? "bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600 hover:text-white"
                      : "",
                  )}
                  onClick={() => toggleSeat(seat)}
                  disabled={isUnavailable}
                >
                  <span className="text-xs">{seatNumber}</span>
                </Button>
              )
            })}
            <div className="w-6 text-center font-medium">{row}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border bg-white"></div>
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border bg-emerald-500"></div>
          <span>Seleccionado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border bg-muted"></div>
          <span>No disponible</span>
        </div>
      </div>
    </div>
  )
}
