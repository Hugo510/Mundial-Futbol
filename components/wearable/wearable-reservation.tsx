"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WearableReservation() {
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  // Mock data for upcoming matches
  const matches = [
    {
      id: "1",
      date: "15 Mayo",
      time: "18:00",
      teamA: "Equipo A",
      teamB: "Equipo B",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      date: "16 Mayo",
      time: "16:30",
      teamA: "Equipo C",
      teamB: "Equipo D",
      logoA: "/placeholder.svg?height=40&width=40",
      logoB: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleSelectMatch = (id: string) => {
    setSelectedMatch(id)
    setStep(2)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleConfirm = () => {
    setStep(3)
  }

  return (
    <div className="flex h-full w-full flex-col p-2">
      {/* Header */}
      <div className="mb-2 text-center">
        <h1 className="text-xs font-bold">Reservación</h1>
        <p className="text-[8px] text-gray-400">Paso {step} de 3</p>
      </div>

      {step === 1 && (
        <div className="flex flex-1 flex-col gap-2 overflow-auto">
          <p className="text-center text-[10px]">Selecciona un partido</p>

          {matches.map((match) => (
            <button
              key={match.id}
              className={cn(
                "flex flex-col items-center rounded-lg bg-emerald-900 p-2",
                selectedMatch === match.id ? "border border-amber-500" : "",
              )}
              onClick={() => handleSelectMatch(match.id)}
            >
              <div className="mb-1 flex items-center justify-center gap-2">
                <div className="h-5 w-5 rounded-full bg-emerald-800 p-1">
                  <Image src={match.logoA || "/placeholder.svg"} alt={match.teamA} width={12} height={12} />
                </div>
                <span className="text-[10px] font-bold">VS</span>
                <div className="h-5 w-5 rounded-full bg-emerald-800 p-1">
                  <Image src={match.logoB || "/placeholder.svg"} alt={match.teamB} width={12} height={12} />
                </div>
              </div>
              <div className="text-[8px]">
                {match.date} - {match.time}
              </div>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-1 flex-col">
          <p className="mb-2 text-center text-[10px]">Selecciona cantidad</p>

          <div className="mb-2 flex flex-col gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button key={num} className="flex items-center justify-between rounded-lg bg-emerald-900 p-2">
                <span className="text-[10px]">
                  {num} {num === 1 ? "boleto" : "boletos"}
                </span>
                <ChevronRight className="h-3 w-3" />
              </button>
            ))}
          </div>

          <div className="mt-auto flex justify-between">
            <button onClick={handleBack} className="rounded-lg bg-gray-700 px-3 py-1 text-[10px]">
              Atrás
            </button>
            <button
              onClick={handleConfirm}
              className="rounded-lg bg-amber-500 px-3 py-1 text-[10px] font-bold text-black"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mb-2 rounded-full bg-emerald-700 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-center text-xs font-bold">¡Reservación Confirmada!</p>
          <p className="mt-1 text-center text-[10px]">Revisa tu correo para más detalles</p>

          <button
            onClick={() => setStep(1)}
            className="mt-4 rounded-lg bg-amber-500 px-4 py-1 text-[10px] font-bold text-black"
          >
            Finalizar
          </button>
        </div>
      )}
    </div>
  )
}
