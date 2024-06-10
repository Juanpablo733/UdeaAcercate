import { DatePicker } from '@/components/atoms/datePicker'
import { EventInteractionsChart } from '@/components/charts/EventInteractionsChart'
import PrivateLayout from '@/layouts/PrivateLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'

const AnalisisEventos = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    return (
        <PrivateLayout isAdminPage={true}>
            {/* <div className="w-full flex flex-row justify-center items-center pt-16"> */}
            <div className="container px-4 mx-auto pt-20">
                <Link href='/admin/tablero' className='hover:scale-125'>
                    <MdKeyboardBackspace className='h-6 w-6 text-black' />
                </Link>
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <span className="text-base sm:text-xl ">Desde</span>
                    <DatePicker type="date" date={startDate} setDate={setStartDate} />
                </div>
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <span className="text-base sm:text-xl ">Hasta</span>
                    <DatePicker type="date" date={endDate} setDate={setEndDate} />
                </div>
            </div>
            <EventInteractionsChart startDate={startDate} endDate={endDate} />
        </PrivateLayout>
    )
}

export default AnalisisEventos
