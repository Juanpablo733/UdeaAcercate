import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import { ReportDetailTable } from '../tables/ReportDetailTable'

interface ModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    eventId: string
}

const ReportDetailsModal = ({ open, setOpen, eventId }: ModalProps) => {
    return (
        <div className='w-full'>
            <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
                <DialogTitle className='w-full'>
                    <p className="italic text-center w-full">
                        Detalle de reportes
                    </p>
                </DialogTitle>
                <DialogContent className='w-full'>
                    <div className='flex flex-col items-center w-full gap-4'>
                        <ReportDetailTable
                        eventId={eventId}
                        />
                        <button
                            onClick={() => setOpen(false)}
                            className='bg-[#35944B] rounded-lg border-2 border-[#35944B] text-white
                        hover:bg-white hover:font-bold hover:text-[#35944B]'>
                            Cerrar</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ReportDetailsModal
