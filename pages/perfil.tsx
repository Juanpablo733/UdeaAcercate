import { Navbar } from '@/components/navbar/Navbar'
import { MiniCard } from '@/components/card/MiniCard';
import {MdHomeFilled} from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';


const perfil = () => {
    const { data: Session, status } = useSession();
  return (
    
    <div className='Yellow-little gap-15 flex flex-col h-screen'>
        <div>
            <Navbar>
                <Link href={'/home'}>
                    <div className='h-full flex items-center justify-center'>
                        <MdHomeFilled className="h-9 w-9 mr-20"/>
                    </div>
                </Link>
            </Navbar>
        </div>        

        <div className='debug h-full flex flex-row'>
            <div className='debug w-1/3 flex flex-col items-center p-4 gap-4'>
                <Image src={Session?.user?.image!} alt={'avatar-image'} height={300} width={300} className='debug rounded-full'/>
                <span className='text-xl font-extrabold'>{Session?.user?.name}</span>
                <span className='text-sm font-bold'>Ingeniería de Sistemas</span>
                <span className='text-sm font-bold'>Estudiante</span>
                <span className='text-sm font-bold mr-7 ml-7'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum accusantium fugit repellendus neque ab dignissimos!
                    Maiores cum corrupti quibusdam dolore! Molestias porro error
                    suscipit iure rerum architecto facilis ratione libero!
                </span>
                <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'>Eventos Creados</button>
                <button className='debug ButtonCard  flex items-center h-14 w-60 justify-center'>Eventos a asistir</button>
                

            </div>
            <div className='debug w-full p-4 grid grid-cols-2 gap-4 justify-items-center'>             
            </div>
        </div>


    </div>
  )
}

export default perfil