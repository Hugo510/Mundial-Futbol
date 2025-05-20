"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarDays, MapPin, Trophy, Users, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Calendario", href: "/schedule", icon: <CalendarDays className="h-5 w-5" /> },
    { name: "Reservaciones", href: "/reservation", icon: <MapPin className="h-5 w-5" /> },
    { name: "Resultados", href: "/results", icon: <Trophy className="h-5 w-5" /> },
    { name: "Información", href: "/info", icon: <Users className="h-5 w-5" /> },
  ]

  return (
    <div className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="h-5 w-5 bg-emerald-700 rounded-full" />
                    </div>
                    <span className="font-semibold">Mundial Escolar</span>
                  </Link>
                  <nav className="grid gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                          pathname === item.href ? "bg-emerald-100 text-emerald-900" : "hover:bg-muted",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="grid gap-2">
                    <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                      <Link href="/reservation" onClick={() => setIsOpen(false)}>
                        Reservar Lugar
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/results" onClick={() => setIsOpen(false)}>
                        Ver Resultados en Vivo
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <div className="h-5 w-5 bg-emerald-700 rounded-full" />
            </div>
            <span className="font-semibold hidden md:inline-block">Mundial Escolar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-emerald-100 text-emerald-900" : "hover:bg-muted",
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" className="bg-emerald-700 hover:bg-emerald-800">
              <Link href="/reservation">Reservar Lugar</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
