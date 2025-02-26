import { MdOutlineLabel } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import { TagType } from '../tag-type/TagType';
import Image from 'next/image';
import CardModal from "../modals/CardModal";
import CompleteCard from "./CompleteCard";
import Link from "next/link";
import { Information } from "@/prisma/generated/type-graphql";
import CompleteCardNotice from "./CompleteCardNotice";
import { formatDateTime } from "@/util/stringFormatter";

interface CardNoticeProps {
    data: Information
}

const CardNotice: React.FC<CardNoticeProps> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const image = data.image === '' ? '/evento1.png' : data.image;

    useEffect(() => {
        const { date, time } = formatDateTime(new Date(data.date));
        setDate(date);
        setTime(time);
    }, [data.date]);

    return (
        <div className='hover:scale-105 transition-transform duration-300 w-full min-w-[360px] max-w-[600px] mx-auto h-[350px] rounded-3xl pt-5 pb-4 px-4 bg-white gap-4 flex flex-col shadow-xl '>
            <header className='flex justify-between items-center gap-4 w-full'>
                <div className='flex gap-1 h-max w-full'>
                    <MdOutlineLabel className="h-8 w-8" />
                    <TagType type={data.tag} />
                </div>
                <Link href={`/perfil/${data.author.id}`} className="w-3/5">
                    <div className='flex gap-2 items-center justify-end w-full'>
                        <span className='text-sm font-bold text-right truncate w-full'>{data.author.name}</span>
                        <Image src={data.author.image} alt={'avatar-image'} height={30} width={30} className='rounded-full' />
                    </div>
                </Link>
            </header>

            <section className="gap-1 flex flex-col justify-between h-full">
                <div className="flex flex-col h-auto items-center ">
                    <span className="text-sm font-semibold">{data.title}</span>
                    <div className="relative h-48 w-80">
                        <Image className="rounded-lg" src={image} alt={'evento1'} layout="fill" objectFit="cover" />
                    </div>
                </div>

                <div className="flex gap-4 justify-between h-12 ">
                    <div className="w-1/4 flex flex-col items-center justify-center">
                        <span className="font-bold text-sm">
                            {date}
                        </span>
                        <span className="font-bold text-sm">
                            {time}
                        </span>
                    </div>
                    <div className="w-1/3">
                        <button
                            className='ButtonCard flex items-center h-full w-full justify-center'
                            onClick={() => {
                                console.log(`Event Id: ${data.id}
                                Author ID ${data.author.id}
                                `)
                                setOpen(true);
                            }}
                        >
                            Ver Más
                        </button>
                        <CardModal
                            open={open}
                            setOpen={setOpen}
                            modalTitle={data.title}
                            tagType={data.tag}
                        >
                            <CompleteCardNotice
                                id={data.id}
                                imagenEvento={image}
                                date={date}
                                time={time}
                                nombre={data.author.name}
                                imagenAutor={data.author.image}
                                idAutor={data.author.id}
                            />
                        </CardModal>
                    </div>
                </div>
            </section>
        </div>
    );
}

export { CardNotice };
