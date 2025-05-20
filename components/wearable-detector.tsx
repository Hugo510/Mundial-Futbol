"use client"

import type React from "react"

import { useState, useEffect } from "react"
import WearableLayout from "./wearable/wearable-layout"

interface WearableDetectorProps {
  children: React.ReactNode
}

export default function WearableDetector({ children }: WearableDetectorProps) {
  const [isWearable, setIsWearable] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const checkIfWearable = () => {
      // Consider devices with width less than 280px as wearables
      // This is a simple heuristic - in production you might want to use
      // more sophisticated detection (user agent, etc.)
      const isWearableSize = window.innerWidth <= 280
      setIsWearable(isWearableSize)
    }

    checkIfWearable()
    window.addEventListener("resize", checkIfWearable)

    return () => {
      window.removeEventListener("resize", checkIfWearable)
    }
  }, [])

  // Only render after client-side hydration to avoid hydration mismatch
  if (!isClient) return null

  if (isWearable) {
    return (
      <div className="fixed inset-0 bg-black">
        <WearableLayout />
      </div>
    )
  }

  return <>{children}</>
}
