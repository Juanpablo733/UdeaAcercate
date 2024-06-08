import { DatePicker } from "@/components/atoms/datePicker";
import { EventInteractionsChart } from "@/components/charts/EventInteractionsChart";
import { SentimentAnalysisChart } from "@/components/charts/SentimentAnalysisChart";
import { SentimentHistogram } from "@/components/charts/SentimentHistogram";
import { Navbar } from "@/components/navbar/Navbar";
import PrivateLayout from "@/layouts/PrivateLayout";
import { useState } from "react";

export default function AnalisisSentimientos() {
    
    return (
        <PrivateLayout>
            <title>
                Analítica | UdeAcercate
            </title>
            <div className="flex flex-col">
                <div className="m-20 flex flex-col items-center gap-10">
                    <SentimentAnalysisChart />
                    <SentimentHistogram />
                </div>
            </div>
        </PrivateLayout>
    )
}