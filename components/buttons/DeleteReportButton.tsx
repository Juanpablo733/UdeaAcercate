import React from 'react'
import { MdFlag } from 'react-icons/md'
import DeleteReportModal, { DeleteReportModalProps } from '../modals/DeleteReportModal'

const DeleteReportButton = ({ open, setOpen, onAccept }: DeleteReportModalProps) => {
    return (
        <>
            < button
                className='flex justify-center items-center hover:bg-gray-200 rounded-full'
                onClick={() => setOpen(true)}
            >
                <MdFlag
                    className='h-[20px] w-[20px]'
                />
            </button >
            <DeleteReportModal
                open={open}
                setOpen={setOpen}
                onAccept={onAccept} />
        </>
    )
}

export default DeleteReportButton
