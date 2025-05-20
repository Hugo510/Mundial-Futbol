"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WearableDashboard from "./wearable-dashboard"
import WearableLiveResults from "./wearable-live-results"
import WearableReservation from "./wearable-reservation"
import WearableMore from "./wearable-more"
import { cn } from "@/lib/utils"

export default function WearableLayout() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const screens = [
    { id: 0, component: <WearableDashboard />, name: "Dashboard" },
    { id: 1, component: <WearableLiveResults />, name: "En Vivo" },
    { id: 2, component: <WearableReservation />, name: "Reservar" },
    { id: 3, component: <WearableMore />, name: "Más" },
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    }

    if (isRightSwipe && currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    }
  }

  const goToNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  const goToPrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    }
  }

  return (
    <div
      className="wearable-container h-full w-full overflow-hidden bg-black text-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-full w-full">
        {/* Screen content */}
        <div className="h-full w-full overflow-hidden">
          {screens.map((screen, index) => (
            <div
              key={screen.id}
              className={cn(
                "absolute h-full w-full transition-transform duration-300 ease-in-out",
                index === currentScreen
                  ? "translate-x-0"
                  : index < currentScreen
                    ? "-translate-x-full"
                    : "translate-x-full",
              )}
            >
              {screen.component}
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className={cn("h-1 w-1 rounded-full", currentScreen === screen.id ? "bg-amber-500" : "bg-gray-600")}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          disabled={currentScreen === 0}
          className={cn(
            "absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",
            currentScreen === 0 ? "opacity-0" : "opacity-70",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          onClick={goToNext}
          disabled={currentScreen === screens.length - 1}
          className={cn(
            "absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1",
            currentScreen === screens.length - 1 ? "opacity-0" : "opacity-70",
          )}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
