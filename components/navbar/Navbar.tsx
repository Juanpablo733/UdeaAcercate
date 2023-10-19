import Image from 'next/image';
import React from 'react'

interface NavbarProps {
    children: JSX.Element;
}

const Navbar = ({children}: NavbarProps) => {
  return (
    <div className=' top-0 left-0 w-full h-16 bg-[#026937] flex justify-between'>
        <div className=' flex items-center'>
            <Image src={'/udea-texto.png'} alt={'udea-texto'} width={100} height={64} className=''/>
            <Image src={'/cercate-texto.png'} alt={'cercate-texto'} width={100} height={64} className=''/>
        </div>
        <div className=''>
            {children}
        </div>
    </div>
  )
}

export {Navbar};