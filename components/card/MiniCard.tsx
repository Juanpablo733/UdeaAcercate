import { MdOutlineLabel, MdOutlinePlace, MdOutlinePermIdentity, MdClose } from "react-icons/md";
import React, { useState } from 'react'
import { TagType } from '../tag-type/TagType'
import Image from 'next/image';
import CardModal from "../modals/CardModal";
import { Card } from "./Card";
import CompleteCard from "./CompleteCard";
interface MiniCardProps {
    id: string,
    nombre: string,
    titulo: string,
    asistentes: number,
    // tipo:"Deportivo" | "Cultural" | "Academico",
    tipo: string,
    fecha: string
    minutes: string,
    hours: string,
    day: string,
    month: string,
    year: string,
    imagenAutor: string
}

const MiniCard = ({ id, nombre, titulo, asistentes, tipo, fecha,
    imagenAutor, day, hours, minutes, month, year }: MiniCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='w-full max-w-[600px] mx-auto h-[350px] rounded-3xl pt-5 pr-4 pl-4 bg-white gap-4 flex flex-col pb-4 shadow-xl'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 h-max'>
                    <MdOutlineLabel className="h-8 w-8" />
                    <TagType type={tipo} />
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='text-sm font-bold'>{nombre}</span>
                    <Image src={imagenAutor} alt={'avatar-image'} height={30} width={30} />
                </div>
            </div>
            <div className="gap-1 flex flex-col justify-between h-full">
                <div className="flex flex-col h-auto items-center">
                    <span className="text-sm font-semibold">{titulo}</span>
                    <Image src={'/evento1.png'} alt={'evento1'} width={300} height={10} />
                </div>
                <div className="flex gap-4 justify-between h-12">
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <span className="font-bold text-sm">
                            {`${year}-${month}-${day}`}
                        </span>
                        <span className="font-bold text-sm">
                            {`${hours}:${minutes}`}
                        </span>
                    </div>
                    <div className="w-1/3">
                        <button
                            className='ButtonCard  flex items-center h-full w-full justify-center'
                            onClick={() => setOpen(true)}
                        >
                            Ver Más
                        </button>
                        <CardModal
                            open={open}
                            setOpen={setOpen}
                            modalTitle={titulo}
                            tagType={tipo}
                            date={fecha}
                            minutes={minutes}
                            day={day}
                            hours={hours}
                            month={month}
                            year={year} >
                            {/* <div>hola</div> */}
                            {/* <Card/> */}
                            <CompleteCard
                                id={id}
                                nombre={nombre}
                                asistentes={asistentes}
                                imagenAutor={imagenAutor}
                            />
                        </CardModal>
                    </div>
                    <div className="w-1/4 flex justify-center items-center">
                        <MdOutlinePermIdentity className={'h-8 w-8'} />
                        <span className='font-bold'>{asistentes}</span>
                    </div>

                </div>

            </div>
        </div>
        // </div>
    )
}

export { MiniCard }