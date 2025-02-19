import React from 'react'
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { MdKeyboardBackspace, MdOutlineKey } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { LuCalendarRange } from 'react-icons/lu';
import { ImNewspaper } from "react-icons/im";
import { IoIosStarOutline } from "react-icons/io";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

interface SidebarProps {
  onHandleToggleMenu: () => void,
  userId: string,
  isAdminUser: boolean
}

const Sidebar = ({ onHandleToggleMenu, userId, isAdminUser }: SidebarProps) => {
  const CloseSession = () => { signOut({ callbackUrl: '/' }) }
  return (
    <aside className="w-60 bg-[var(--green-hard)] p-4 h-screen flex flex-col justify-between ">

      <div className='flex justify-between items-center text-white '>
        <div className='flex gap-4 font-bold '>
          <FaHandshakeAngle className='h-8 w-8 text-white' />
          UdeAcercate
        </div>
        <button onClick={onHandleToggleMenu}>
          <MdKeyboardBackspace className='h-8 w-8 text-white' />
        </button>
      </div>

      <nav className=''>
        <ul className='flex flex-col gap-4'>
          <li className='hover:scale-95'>
            <Link href={`/perfil/${userId}`} className='sidebar-item'>
              <CgProfile className='h-8 w-8 text-white' />
              Perfil
            </Link>
          </li>
          <li className='hover:scale-95' >
            <Link href="/home" className='sidebar-item'>
              <LuCalendarRange className='h-8 w-8 text-white' />
              Eventos
            </Link>
          </li>
          <li className='hover:scale-95' >
            <Link href="/noticias" className='sidebar-item'>
              <ImNewspaper className='h-8 w-8 text-white' />
              Noticias
            </Link>
          </li>
          {/* <li className='hover:scale-95' >
            <Link href="/chat" className='sidebar-item'>
              <PiChatCircleTextLight className='h-8 w-8 text-white' />
              Chat
            </Link>
          </li> */}
          <li className='hover:scale-95' >
            <Link href="/oficial" className='sidebar-item'>
              <IoIosStarOutline className='h-8 w-8 text-white' />
              Oficial
            </Link>
          </li>
          {
            isAdminUser ?
              <li className='hover:scale-95' >
                <Link href="/admin/tablero" className='sidebar-item'>
                  <MdOutlineKey className='h-8 w-8 text-white' />
                  Administrar
                </Link>
              </li>
              : <></>
          }
        </ul>
      </nav>

      <button className='flex gap-4 font-bold items-center text-white hover:scale-95' onClick={CloseSession} >
        <TbLogout className="h-8 w-8 text-white" />
        Cerrar sesión
      </button>
    </aside>
  )
}

export { Sidebar };