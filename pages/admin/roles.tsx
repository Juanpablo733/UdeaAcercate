import { RoleTable } from '@/components/tables/RoleTable'
import PrivateLayout from '@/layouts/PrivateLayout'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

const Roles = () => {
  const [email, setEmail] = useState("")
  console.log("Email:", email)
  const handleBackPage = () => {
    console.log('hola');
    
  } 
  return (
    <PrivateLayout isAdminPage={true}>
      <section className="container px-4 mx-auto pt-20">
        <Link href='/admin/tablero' className='hover:scale-125'>
          <MdKeyboardBackspace className='h-6 w-6 text-black' />
        </Link>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Usuarios
            </h2>
          </div>
        </div>

        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>

            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Buscar por correo" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
        </div>
        <RoleTable searchEmail={email} />
      </section>
    </PrivateLayout>
  )
}

export default Roles
