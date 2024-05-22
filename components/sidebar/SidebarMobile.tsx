import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useUserData } from "@/hooks/useUserData";
import { MdDehaze, MdKeyboardBackspace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LuCalendarRange } from "react-icons/lu";
import { ImNewspaper } from "react-icons/im";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHandshakeAngle } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const SidebarMobile = ({onHamburgerClick}) => {
  const { loading: loadingUser, session, status, userData } = useUserData();
  const userId = userData?.user.id;
  const CloseSession = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <aside className="sidebar-mobile debug">
      <button className="debug p-0" onClick={onHamburgerClick}>
        <RxHamburgerMenu className="h-8 w-8 text-white"/>
      </button>
      <nav className="debug">
        <ul className="flex flex-col gap-4">
          <li className="debug flex">
            <Link href={`/perfil/${userId}`}>
              <CgProfile className="h-8 w-8 text-white" />
            </Link>
          </li>
          <li className="debug">
            <Link href="/home">
              <LuCalendarRange className="h-8 w-8 text-white" />
            </Link>
          </li>
          <li className="debug">
            <Link href="/noticias">
              <ImNewspaper className="h-8 w-8 text-white" />
            </Link>
          </li>
          <li className="debug">
            <Link href="/chat">
              <PiChatCircleTextLight className="h-8 w-8 text-white" />
            </Link>
          </li>
          <li className="debug">
            <Link href="/oficial">
              <IoIosStarOutline className="h-8 w-8 text-white" />
            </Link>
          </li>
        </ul>
      </nav>

      <button className="debug p-0" onClick={CloseSession}>
        <TbLogout className="h-8 w-8 text-white"/>
      </button>
    </aside>
  );
};

export { SidebarMobile };
