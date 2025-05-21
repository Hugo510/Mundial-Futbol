import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Mundial Escolar</h3>
            <p className="text-blue-200 text-sm mb-4">
              El torneo escolar más importante de la región, organizado por el Comité Organizador de Mundial Escolar de
              Fútbol.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schedule" className="text-blue-200 hover:text-white">
                  Calendario de Partidos
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-blue-200 hover:text-white">
                  Reservaciones
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-blue-200 hover:text-white">
                  Resultados en Vivo
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-blue-200 hover:text-white">
                  Información General
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/info" className="text-blue-200 hover:text-white">
                  Sobre el Torneo
                </Link>
              </li>
              <li>
                <Link href="/info?tab=teams" className="text-blue-200 hover:text-white">
                  Equipos Participantes
                </Link>
              </li>
              <li>
                <Link href="/info?tab=rules" className="text-blue-200 hover:text-white">
                  Reglamento
                </Link>
              </li>
              <li>
                <Link href="/info?tab=venues" className="text-blue-200 hover:text-white">
                  Sedes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <address className="text-sm text-blue-200 not-italic space-y-2">
              <p>Comité Organizador de Mundial Escolar de Fútbol</p>
              <p>Av. Principal #123</p>
              <p>Durango, México</p>
              <p className="pt-2">
                <a href="mailto:info@mundialescolar.com" className="hover:text-white">
                  info@mundialescolar.com
                </a>
              </p>
              <p>
                <a href="tel:+526181234567" className="hover:text-white">
                  +52 (618) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-sm text-blue-300 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Mundial Escolar de Fútbol. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:text-white">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
