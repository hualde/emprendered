import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Navbar() {
  const { user, isLoading } = useUser()

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              EmprendeRed
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/forums" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Foros
              </Link>
              <Link href="/learning" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Material de Aprendizaje
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!isLoading && !user && (
              <Link href="/api/auth/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Iniciar Sesión
              </Link>
            )}
            {user && (
              <Link href="/api/auth/logout" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Cerrar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}