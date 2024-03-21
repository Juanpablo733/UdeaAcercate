import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useUserData } from '@/hooks/useUserData';
import { MdDehaze, MdKeyboardBackspace } from "react-icons/md";

const Navbar = () => {
  const { loading: loadingUser, session, status, userData } = useUserData();
  const userId = userData?.user.id
  const CloseSession = () => { signOut({ callbackUrl: '/' }) }  
  return (
    <div className='w-full h-16 bg-[#026937] flex items-center justify-between debug px-4'>
      <button className='text-white font-bold hidden sm:block' onClick={CloseSession} >
        Cerrar sesión
      </button>
      <MdKeyboardBackspace className='h-8 w-8 sm:hidden'/>
      <Link href={'/home'} >
        <div className=' flex items-center'>
            <span className='text-3xl font-bold text-white font-mono '>UdeA</span>
            <span className='text-xl text-white font-serif'>cércate</span>
        </div>
      </Link>
      <Link href={`/perfil/${userId}`}>
          <div className='gap-4 items-center justify-center hidden sm:flex'>
              <span className=' text-white font-bold'>{session?.user?.name}</span>
              <Image src={session?.user?.image!} alt={'avatar-image'} height={50} width={50} className='rounded-full' />
          </div>
      </Link>
      <MdDehaze className='h-8 w-8 sm:hidden'/>
    </div>
  )
}

export {Navbar};