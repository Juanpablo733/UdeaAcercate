import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useUserData } from '@/hooks/useUserData';
import { MdDehaze, MdKeyboardBackspace } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { LuCalendarRange } from 'react-icons/lu';
import { ImNewspaper } from "react-icons/im";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const Sidebar = ({onBackClick}) => {
  const { loading: loadingUser, session, status, userData } = useUserData();
  const userId = userData?.user.id
  const CloseSession = () => { signOut({ callbackUrl: '/' }) }  
  return (
    // <div className='w-full h-16 bg-[#026937] flex items-center justify-between px-4 fixed z-10'>
    <aside className="sidebar debug">

      <div className='flex justify-between items-center text-white debug'>
        <div className='flex gap-4 font-bold debug'>
          <FaHandshakeAngle className='h-8 w-8 text-white'/>
          UdeAcercate
        </div>
        <button onClick={onBackClick}>  
          <MdKeyboardBackspace className='h-8 w-8 text-white'/>
        </button>
      </div>

      <nav className='debug'>
        <ul className='flex flex-col gap-4'>
          <li className='debug flex'>
            <Link href={`/perfil/${userId}`} className='sidebar-item'>
              <CgProfile className='h-8 w-8 text-white'/> 
              Perfil
            </Link>
          </li>
          <li className='debug' >
            <Link href="/home" className='sidebar-item'>
              <LuCalendarRange className='h-8 w-8 text-white'/>
              Eventos
            </Link>
          </li>
          <li className='debug' >
            <Link href="/noticias" className='sidebar-item'>
              <ImNewspaper className='h-8 w-8 text-white' />
              Noticias
            </Link>
          </li>
          <li className='debug' >
            <Link href="/chat" className='sidebar-item'>
              <PiChatCircleTextLight className='h-8 w-8 text-white' />
              Chat
            </Link>
          </li>
          <li className='debug' >
            <Link href="/oficial" className='sidebar-item'>
              <IoIosStarOutline className='h-8 w-8 text-white' />
              Oficial
            </Link>
          </li>
        </ul>
      </nav>

      <button className='debug flex gap-4 font-bold items-center text-white' onClick={CloseSession} >
        <TbLogout className="h-8 w-8 text-white"/>
        Cerrar sesión
      </button>    
    </aside>
  )
}

export {Sidebar};