import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export interface ReportModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    reason: string,
    setReason: Dispatch<SetStateAction<string>>,
    onAccept: () => Promise<void>,
}

const reportReasons = [
    "Contenido inapropiado",
    "Contenido sexual",
    "Contenido violento",
    "Agresión verbal",
]

export default function ReportEventModal({ open, setOpen, onAccept, reason, setReason }: ReportModalProps) {
    const onAcceptAction = () => {
        onAccept()
        setOpen(false)
    }
    return (
        <div className="rounded-full">
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle >
                    <p className="italic text-center">
                        Reportar este evento
                    </p>
                </DialogTitle>
                <DialogContent>
                    <div className="w-full gap-4 flex flex-col">
                        <p className='italic font-bold text-justify pb-2'>
                            ¿Cuál es su razón para reportar este evento?
                        </p>
                        <div className="flex flex-col self-center gap-2">
                            <div className="flex w-full gap-2 self-center"
                                onClick={() => setReason("")}
                            >
                                <input
                                    type="radio"
                                    value=""
                                    checked={reason === ""}
                                    onChange={() => setReason("")}
                                />
                                <label>
                                    Prefiero no decirlo
                                </label>
                            </div>
                            {reportReasons.map(reasonItem =>
                                <div className="flex w-full gap-2 self-center"
                                    onClick={() => setReason(reasonItem)}
                                >
                                    <input
                                        type="radio"
                                        value={reasonItem}
                                        checked={reason === reasonItem}
                                        onChange={() => setReason(reasonItem)}
                                    />
                                    <label>
                                        {reasonItem}
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-evenly'>
                            <button
                                onClick={onAcceptAction}
                                className='bg-[#35944B] rounded-lg border-2 border-[#35944B] text-white
                            hover:bg-white hover:font-bold hover:text-[#35944B]'>
                                Reportar</button>
                            <button
                                onClick={() => setOpen(false)}
                                className='bg-[#94357e] rounded-lg border-2 border-[#94357e] text-white
                            hover:bg-white hover:font-bold hover:text-[#94357e]'>
                                Cancelar</button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}