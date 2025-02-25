
import { Dialog, DialogContent, DialogProps, DialogTitle, ThemeProvider, createTheme } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { TagType } from '../tag-type/TagType';
import { MdClose } from 'react-icons/md';

const theme = createTheme({
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '0px', // Sobrescribe el padding aquí
        },
      },
    },
  },
});

interface CardModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  tagType: "Deportivo" | "Cultural" | "Academico" | "Noticia",
  children: JSX.Element;
}
const CardModal = ({ open, setOpen, modalTitle, tagType, children }: CardModalProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
        {/* <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth} className='debug' fullScreen> */}
        {/* <div className='flex justify-end mt-2 mr-5'> */}
        <div className='flex justify-between pt-3 px-5'>
          <button className='p-0' onClick={() => setOpen(false)}>
            <MdClose className="h-6 w-6" />
          </button>
          <DialogTitle>{modalTitle}</DialogTitle>
          <TagType type={tagType} />
        </div>
        {/* <div className='flex flex-col items-center justify-center'>
          <DialogTitle>{modalTitle}</DialogTitle>
          <span className="text-black font-bold">
            {`${year}-${month}-${day}`}
          </span>
          <span className="text-black font-bold">
            {`${hours}:${minutes}`}
          </span>
        </div> */}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}

export default CardModal