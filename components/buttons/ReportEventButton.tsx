import React from 'react'
import { MdOutlinedFlag } from 'react-icons/md'
import ReportEventModal, { ReportModalProps } from '../modals/ReportEventModal'

const ReportEventButton = ({ open, setOpen, reason, setReason, onAccept }: ReportModalProps) => {
    return (
        <>
            < button
                className='flex justify-center items-center hover:bg-gray-200 rounded-full'
                onClick={() => setOpen(true)}
            >
                <MdOutlinedFlag
                    className='h-[20px] w-[20px]'
                />
            </button >
            <ReportEventModal
                open={open}
                setOpen={setOpen}
                reason={reason}
                setReason={setReason}
                onAccept={onAccept} />
        </>
    )
}

export default ReportEventButton
