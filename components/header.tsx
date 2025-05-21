import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo Mundial Escolar" width={30} height={30} />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Mundial Escolar de Fútbol</h1>
            <p className="text-xs text-blue-100">Comité Organizador</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="#" className="text-blue-100 hover:text-white">
            Contacto
          </Link>
          <span className="text-purple-300">|</span>
          <Link href="#" className="text-blue-100 hover:text-white">
            Español
          </Link>
        </div>
      </div>
    </div>
  )
}
