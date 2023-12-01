
import { Dialog, DialogContent, DialogProps, DialogTitle } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface CreateEventModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: JSX.Element;
}
const CreateEventModal = ({open, setOpen, children}: CreateEventModalProps) => {
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('lg');
  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth={400}>
      <div className='flex flex-col items-center justify-center'>
        <DialogTitle>Crear evento</DialogTitle>
      </div>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default CreateEventModal