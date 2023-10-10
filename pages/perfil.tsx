import { Navbar } from '@/components/navbar/Navbar'
import { MiniCard } from '@/components/card/MiniCard';
import {MdHomeFilled} from "react-icons/md";
import Image from 'next/image';

const perfil = () => {
  return (
    
    <div className='Yellow-little gap-15 flex flex-col h-screen'>
        <div>
            <Navbar>
                <div className='h-full debug flex items-center justify-center'>
                    <MdHomeFilled className="h-9 w-9 mr-20"/>
                </div>
            </Navbar>
        </div>        

        <div className='debug h-full flex flex-row'>
            <div className='debug w-1/3 flex flex-col items-center p-4 gap-4'>
                <Image src={'/juan.png'} alt={'avatar-image'} height={300} width={300} className='debug'/>
                <span className='text-xl font-extrabold'>Juan Pablo Bedoya Sánchez</span>
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
                <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
                <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
                <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
                <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>              
            </div>
        </div>


    </div>
  )
}

export default perfil