
import { Dialog, DialogContent, DialogProps, DialogTitle } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { TagType } from '../tag-type/TagType';

interface CardModalProps{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  tagType: string;
  date: string
  children: JSX.Element;
}
const CardModal = ({open, setOpen, modalTitle, tagType, date, children}: CardModalProps) => {
  // const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('lg');
  return (
    <Dialog open={open} onClose={()=> setOpen(false)} maxWidth={maxWidth}>
      <div className='flex justify-end mt-2 mr-5'>
        <TagType type={tagType}/>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <DialogTitle>{modalTitle}</DialogTitle>
        <span className='text-black font-bold'>{date}</span>
      </div>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default CardModal