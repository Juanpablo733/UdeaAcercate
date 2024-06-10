import { DatePicker } from "@/components/atoms/datePicker";
import { EventInteractionsChart } from "@/components/charts/EventInteractionsChart";
import { SentimentAnalysisChart } from "@/components/charts/SentimentAnalysisChart";
import { SentimentHistogram } from "@/components/charts/SentimentHistogram";
import { Navbar } from "@/components/navbar/Navbar";
import PrivateLayout from "@/layouts/PrivateLayout";
import { useState } from "react";
import Link from 'next/link'
import { MdKeyboardBackspace } from 'react-icons/md'
export default function AnalisisSentimientos() {
    
    return (
        <PrivateLayout isAdminPage={true}>
            <title>
                Analítica | UdeAcercate
            </title>
            <div>
            {/* <div className="flex flex-col"> */}
            <div className="container px-4 mx-auto pt-20">
                <Link href='/admin/tablero' className='hover:scale-125'>
                    <MdKeyboardBackspace className='h-6 w-6 text-black' />
                </Link>
                <div className="m-20 flex flex-col items-center gap-10">
                    <SentimentAnalysisChart />
                    <SentimentHistogram />
                </div>
            </div>

            </div>
        </PrivateLayout>
    )
}