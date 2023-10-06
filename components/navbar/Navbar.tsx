import Image from 'next/image';
import React from 'react'

interface NavbarProps {
    children: JSX.Element;
}

const Navbar = ({children}: NavbarProps) => {
  return (
    <div className='w-full h-16 debug bg-[#026937] flex justify-between'>
        <div className='debug flex items-center'>
            <Image src={'/udea-texto.png'} alt={'udea-texto'} width={100} height={64} className='debug'/>
            <Image src={'/cercate-texto.png'} alt={'cercate-texto'} width={100} height={64} className='debug'/>
        </div>
        <div className='debug'>
            {children}
        </div>
    </div>
  )
}

export {Navbar};