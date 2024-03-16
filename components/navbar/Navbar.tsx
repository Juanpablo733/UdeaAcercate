import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';


interface NavbarProps {
    children: JSX.Element;
}

const Navbar = ({children}: NavbarProps) => {
  const CloseSession = () => { signOut({ callbackUrl: '/' }) }  
  return (
    <div className=' top-0 left-0 w-full h-16 bg-[#026937] flex justify-around items-center'>
      <button className='text-white font-bold' onClick={CloseSession} >
                Cerrar sesión
      </button>
        <Link href={'/home'} >
          <div className=' flex items-center'>
              <Image src={'/udea-texto.png'} alt={'udea-texto'} width={100} height={64} className=''/>
              <Image src={'/cercate-texto.png'} alt={'cercate-texto'} width={100} height={64} className=''/>
          </div>
        </Link>
        <div className=''>
            {children}
        </div>
    </div>
  )
}

export {Navbar};