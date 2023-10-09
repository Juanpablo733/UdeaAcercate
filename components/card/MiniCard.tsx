import {MdOutlineLabel, MdOutlinePlace,MdOutlinePermIdentity, MdClose} from "react-icons/md";
import React from 'react'
import { TagType } from '../tag-type/TagType'
import Image from 'next/image';
interface MiniCardPropos{
    nombre: string,
    titulo: string,
    asistentes: number,
    tipo:"Deportivo" | "Cultural" | "Academico",
    fecha: string
}




const MiniCard = ({nombre, titulo, asistentes,tipo,fecha}: MiniCardPropos) => {
  return (
    <div className='w-[500px] h-[350px] debug rounded-3xl pt-5 pr-4 pl-4 bg-white gap-4 flex flex-col pb-4 shadow-xl'>
        <div className='flex justify-between debug items-center'>
            <div className='debug flex gap-1 h-max'>
                <MdOutlineLabel className="h-8 w-8"/>
                <TagType type={tipo} />
            </div>
            <div className='debug flex gap-4 items-center'>
                <span className='text-sm font-bold'>{nombre}</span>
                <Image src={'/juan.png'} alt={'avatar-image'} height={30} width={30} className='debug'/>
            </div>
        </div>
        <div className=" debug gap-1 flex flex-col justify-between h-full">
            <div className=" debug flex flex-col h-auto items-center">
                <span className="text-sm font-semibold">{titulo}</span>
                <Image src={'/evento1.png'} alt={'evento1'} width={300} height={10} className='debug'/>
            </div>
            <div className="debug flex gap-4 justify-between h-12">
                <div className="debug w-1/4 flex flex-col items-center justify-center">
                    <span className="font-bold text-sm">
                        {fecha}
                    </span>
                </div>
                <div className="debug w-1/3">
                    <button className='debug ButtonCard  flex items-center h-full w-full justify-center'>Ver Más</button>
                </div>
                <div className="debug w-1/4 flex justify-center items-center">
                    <MdOutlinePermIdentity className={'h-8 w-8'} />
                    <span className='font-bold'>{asistentes}</span>
                </div>

            </div>

        </div>
    </div>
  )
}

export  {MiniCard}