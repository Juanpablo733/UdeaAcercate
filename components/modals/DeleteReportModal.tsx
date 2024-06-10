import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export interface DeleteReportModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    onAccept: () => Promise<void>,
}

const reportReasons = [
    "Contenido inapropiado",
    "Contenido sexual",
    "Contenido violento",
    "Agresión verbal",
]

export default function DeleteReportModal({ open, setOpen, onAccept }: DeleteReportModalProps) {
    const onAcceptAction = () => {
        onAccept()
        setOpen(false)
    }
    return (
        <div className="rounded-full">
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle >
                    <p className="italic text-center">
                        Eliminar reporte
                    </p>
                </DialogTitle>
                <DialogContent>
                    <div className="w-full gap-4 flex flex-col">
                        <p className='italic font-bold text-justify pb-2'>
                            ¿De verdad quiere eliminar su reporte sobre este evento?
                        </p>
                        <div className='flex justify-evenly'>
                            <button
                                onClick={onAcceptAction}
                                className='bg-[#35944B] rounded-lg border-2 border-[#35944B] text-white
                            hover:bg-white hover:font-bold hover:text-[#35944B]'>
                                Eliminar</button>
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