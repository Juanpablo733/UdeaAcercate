import { DatePicker } from "@/components/atoms/datePicker";
import { EventInteractionsChart } from "@/components/charts/EventInteractionsChart";
import { SentimentAnalysisChart } from "@/components/charts/SentimentAnalysisChart";
import { SentimentHistogram } from "@/components/charts/SentimentHistogram";
import { useState } from "react";

export default function Charts() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    return (
        <div>
            <div className="w-full flex flex-row justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <span className="text-base sm:text-xl ">Desde</span>
                    <DatePicker type="date" date={startDate} setDate={setStartDate} />
                </div>
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <span className="text-base sm:text-xl ">Hasta</span>
                    <DatePicker type="date" date={endDate} setDate={setEndDate} />
                </div>
            </div>
            <SentimentHistogram/>
            <EventInteractionsChart startDate={startDate} endDate={endDate} />
        </div>
    )
}