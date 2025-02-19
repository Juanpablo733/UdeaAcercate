
import { Dialog, DialogContent, DialogProps, DialogTitle } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface CreateEventModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: JSX.Element;
    titulo:string
}
const CreateEventModal = ({open, setOpen, children, titulo}: CreateEventModalProps) => {
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('lg');
  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth} className='rounded-3xl'> 
      <div className='flex flex-col items-center justify-center'>
        <DialogTitle className='font-extrabold'>{titulo}</DialogTitle>
      </div>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default CreateEventModal