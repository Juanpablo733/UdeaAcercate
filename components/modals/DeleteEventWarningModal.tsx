import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface ModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    onAccept: () => Promise<void>,
}

export default function DeleteEventWarningModal({ open, setOpen, onAccept }: ModalProps) {
    return (
        <div className="rounded-full">
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle >
                    <p className="italic text-center">
                        ¿Desea eliminar este evento?
                    </p>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <p className='italic font-bold text-justify pb-2'>Al eliminar este evento se eliminarán también sus comentarios y lista de asistentes.
                        </p>
                        <div className='flex justify-evenly'>
                            <button
                                onClick={onAccept}
                                className='w-10 bg-[#35944B] rounded-lg border-2 border-[#35944B] text-white
                            hover:bg-white hover:font-bold hover:text-[#35944B]'>
                                Sí</button>
                            <button
                                onClick={() => setOpen(false)}
                                className='w-10 bg-[#94357e] rounded-lg border-2 border-[#94357e] text-white
                            hover:bg-white hover:font-bold hover:text-[#94357e]'>
                                No</button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}