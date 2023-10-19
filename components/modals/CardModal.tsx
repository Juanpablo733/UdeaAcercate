
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'

interface CardModalProps{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  children: JSX.Element;
}
const CardModal = ({open, setOpen, modalTitle, children}: CardModalProps) => {
  return (
    <Dialog open={open} onClose={()=> setOpen(false)}>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default CardModal