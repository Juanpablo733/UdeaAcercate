import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Session } from "next-auth";
import SearchBar from "../searchbar/SearchBar";
import { useRouter } from "next/router";
import { formatName } from "@/util/nameFormatter";

interface NavbarProps {
  session: Session,
  userId: string,
  isUserAdmin: boolean
}


const Navbar = ({ userId, isUserAdmin, session }: NavbarProps) => {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const [route, setRoute] = useState("");


  useEffect(() => {
    setRoute(router.route);
  }, [router]);

  useEffect(() => {
    setUserName(formatName(session.user.name));
  }, [])

  return (
    <div className="w-full h-20 flex items-center justify-between px-[72px] fixed z-10" style={{ "background": "linear-gradient(90deg, #35944B, #036937, #026937)" }}>
      <div className="flex items-center gap-5">
        <Link href={"/home"}>
          <div className=" flex items-center">
            <Image src="/udea-logo.png" alt="Logo Udea" width={84.5} height={42.8} />
            <span className="text-[32px] text-white font-din">cércate</span>
          </div>
        </Link>
        <SearchBar onSearch={() => { }}></SearchBar>
      </div>
      <div className="flex gap-[28px] items-center font-size-[24px]">
        <Section title="Eventos" redirection="/home" isSelected={route === "/home"} />
        <Section title="Noticias" redirection="/noticias" isSelected={route === "/noticias"} />
        <Section title="Oficial" redirection="/oficial" isSelected={route === "/oficial"} />
      </div>

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

const Section = ({ title, redirection, isSelected }: { title: string, redirection: string, isSelected: boolean, }) => {
  const selectedClassname = "border-b-[3px] font-bold ";
  const unselectedClassname = "sidebar-item";
  return (
    <>
      {
        isSelected ?
          <div className="sidebar-item">
            < div className={selectedClassname} >
              {title}
            </div >
          </div>
          :
          <Link href={redirection} className='sidebar-item'>
            < div className={unselectedClassname} >
              {title}
            </div >
          </Link >
      }
    </>
  );
}

export { Navbar };
