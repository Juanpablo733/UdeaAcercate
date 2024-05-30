import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useUserData } from "@/hooks/useUserData";
import { MdDehaze } from "react-icons/md";
import { Sidebar } from "../sidebar/Sidebar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { loading: loadingUser, session, status, userData } = useUserData();
  const userId = userData?.user.id;
  const CloseSession = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="w-full h-16 bg-[#026937] flex items-center justify-between px-4 fixed z-10">
      <button className="text-white font-bold" onClick={handleToggleMenu}>
        <MdDehaze className="h-8 w-8 text-white" />
      </button>
      {showMenu && (
        <div className="h-full fixed top-0 left-0 w-full bg-black/40" onClick={handleToggleMenu}>
          <div className="absolute top-0 left-0">
            <Sidebar onHandleToggleMenu={handleToggleMenu} />
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
