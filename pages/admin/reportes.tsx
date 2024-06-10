import { ReportTable } from '@/components/tables/ReportTable'
import PrivateLayout from '@/layouts/PrivateLayout'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

const Reportes = () => {
  return (
    <PrivateLayout isAdminPage={true}>
      <title>
        Reportes | UdeAcercate
      </title>
      <section className="container px-4 mx-auto pt-20">
        <Link href='/admin/tablero' className='hover:scale-125'>
          <MdKeyboardBackspace className='h-6 w-6 text-black' />
        </Link>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              Reportes
            </h2>
          </div>
        </div>
        <ReportTable />
      </section>
    </PrivateLayout>
  )
}

export default Reportes
