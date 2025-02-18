import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sidebar } from "../sidebar/Sidebar";
import { Session } from "next-auth";
import { MdOutlineKey } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { LuCalendarRange } from 'react-icons/lu';
import { ImNewspaper } from "react-icons/im";
import { IoIosStarOutline } from "react-icons/io";
import SearchBar from "../searchbar/SearchBar";

interface NavbarProps {
  session: Session,
  userId: string,
  isUserAdmin: boolean
}

//TODO agregar fuente de texto Roboto

const Navbar = ({ userId, isUserAdmin, session }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const userNameArray = session.user.name.toLowerCase().split(" ");
    const newUserName = []
    userNameArray.forEach(value => newUserName.push(value.replace(value[0], value[0].toLocaleUpperCase())));
    setUserName(newUserName.join(" "))
  }, [])

  return (
    <div className="w-full h-20 flex items-center justify-between px-[72px] fixed z-10" style={{ "background": "linear-gradient(90deg, #35944B, #036937, #026937)" }}>
      {/* <button className="text-white font-bold" onClick={handleToggleMenu}>
        <MdDehaze className="h-8 w-8 text-white" />
      </button> */}
      {/* {showMenu && (
        <div className="h-full fixed top-0 left-0 w-full bg-black/40" onClick={handleToggleMenu}>
          <div className="absolute top-0 left-0">
            <Sidebar
              onHandleToggleMenu={handleToggleMenu}
              userId={userId}
              isAdminUser={isUserAdmin}
            />
          </div>
        </div>
      )} */}
      <div className="flex items-center gap-5">
        <Link href={"/home"}>
          <div className=" flex items-center">
            <span className="text-3xl font-bold text-white font-mono ">UdeA</span>
            <span className="text-xl text-white">cércate</span>
          </div>
        </Link>
        <SearchBar onSearch={() => { }}></SearchBar>
      </div>
      <div className="flex gap-[28px] items-center font-size-[24px]">
        <Link href="/home" className='sidebar-item'>
          Eventos
        </Link>
        <Link href="/noticias" className='sidebar-item'>
          Noticias
        </Link>
        <Link href="/oficial" className='sidebar-item'>
          Oficial
        </Link>
      </div>
      {/* <nav className=''>
        <ul className='flex flex-col gap-4'>
          <li className='hover:scale-95' >
          </li>
          <li className='hover:scale-95' >
          </li>
          <li className='hover:scale-95' >
          </li>
          {
            isUserAdmin ?
              <li className='hover:scale-95' >
                <Link href="/admin/tablero" className='sidebar-item'>
                  <MdOutlineKey className='h-8 w-8 text-white' />
                  Administrar
                </Link>
              </li>
              : <></>
          }
        </ul>
      </nav> */}

      <Link href={`/perfil/${userId}`}>
        <div className="gap-[12px] items-center justify-center hidden sm:flex">
          <span className=" text-white font-bold">{userName}</span>
          <Image
            src={session?.user?.image!}
            alt={"avatar-image"}
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};

export { Navbar };
