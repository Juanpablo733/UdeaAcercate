import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdDehaze } from "react-icons/md";
import { Sidebar } from "../sidebar/Sidebar";
import { Session } from "next-auth";

interface NavbarProps{
  session: Session,
  userId: string,
  isUserAdmin: boolean
}

const Navbar = ({userId, isUserAdmin, session}:NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-16 bg-[#026937] flex items-center justify-between px-4 fixed z-10">
      <button className="text-white font-bold" onClick={handleToggleMenu}>
        <MdDehaze className="h-8 w-8 text-white" />
      </button>
      {showMenu && (
        <div className="h-full fixed top-0 left-0 w-full bg-black/40" onClick={handleToggleMenu}>
          <div className="absolute top-0 left-0">
            <Sidebar
              onHandleToggleMenu={handleToggleMenu}
              userId={userId}
              isAdminUser={isUserAdmin}
            />
          </div>
        </div>
      )}
      <Link href={"/home"}>
        <div className=" flex items-center">
          <span className="text-3xl font-bold text-white font-mono ">UdeA</span>
          <span className="text-xl text-white font-serif">cércate</span>
        </div>
      </Link>
      <Link href={`/perfil/${userId}`}>
        <div className="gap-4 items-center justify-center hidden sm:flex">
          <span className=" text-white font-bold">{session?.user?.name}</span>
          <Image
            src={session?.user?.image!}
            alt={"avatar-image"}
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};

export { Navbar };
