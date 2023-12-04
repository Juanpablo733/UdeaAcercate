import { MdOutlineLabel, MdOutlinePermIdentity } from "react-icons/md";
import React, { useState } from 'react'
import { TagType } from '../tag-type/TagType'
import Image from 'next/image';
import CardModal from "../modals/CardModal";
import CompleteCard from "./CompleteCard";
import Link from "next/link";
interface MiniCardProps {
    id: string,
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
    idAutor: string,
    nombreAutor: string,
    imagenAutor: string,
    imagenEvento: string
}

const MiniCard = ({ id, nombreAutor, titulo, asistentes, tipo, fecha,
    imagenAutor, idAutor, day, hours, minutes, month, year, imagenEvento }: MiniCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='w-full max-w-[600px] mx-auto h-[350px] rounded-3xl pt-5 pr-4 pl-4 bg-white gap-4 flex flex-col pb-4 shadow-xl'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 h-max'>
                    <MdOutlineLabel className="h-8 w-8" />
                    <TagType type={tipo} />
                </div>
                <Link href={`/perfil/${idAutor}`}>
                    <div className='flex gap-4 items-center'>
                        <span className='text-sm font-bold'>{nombreAutor}</span>
                        <Image src={imagenAutor} alt={'avatar-image'} height={30} width={30} />
                    </div>
                </Link>
            </div>
            <div className="gap-1 flex flex-col justify-between h-full">
                <div className="flex flex-col h-auto items-center">
                    <span className="text-sm font-semibold">{titulo}</span>
                    <div className="relative h-48 w-96">
                        <Image className="rounded-lg" src={imagenEvento} alt={'evento1'} layout="fill" objectFit="cover"/>
                    </div>
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
                            <CompleteCard
                                id={id}
                                nombre={nombreAutor}
                                asistentes={asistentes}
                                imagenAutor={imagenAutor}
                                idAutor={idAutor}
                                imagenEvento={imagenEvento}
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