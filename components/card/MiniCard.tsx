import { MdOutlineLabel, MdOutlinePermIdentity } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { TagType } from '../tag-type/TagType'
import Image from 'next/image';
import CardModal from "../modals/CardModal";
import CompleteCard from "./CompleteCard";
import Link from "next/link";
import { ExtendedEvent } from "@/graphql/client/event";
import { IoIosStarOutline } from "react-icons/io";
import { formatName } from "@/util/nameFormatter";
interface MiniCardProps {
    data: ExtendedEvent,
    sessionUserId: string
}

const MiniCard = ({ data, sessionUserId }: MiniCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('')
    const date = new Date(data.info.date)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const image = data.info.image == '' ? '/evento1.png' : data.info.image
    // console.log('url? ', image);

    useEffect(() => {
        setName(formatName(data.author.name));
    }, []);

    return (
        <div className={styles.container}>
            <div className="relative h-[246px] w-[419px]">
                {
                    image.includes('.mp4') ?
                        <video
                            // className="rounded-lg min-w-[280px] sm:min-w-[480px]"
                            // width={360}
                            className="rounded-lg"
                            controls
                            muted
                        >
                            <source
                                type="video/mp4"
                                src={image}
                            />
                        </video>
                        :
                        <Image className="rounded-t-xl" src={image} alt={'evento1'} layout="fill" objectFit="cover" />
                }
            </div>
            <div className={styles.tag}>
                <TagType type={data.info.tag} />
            </div>
            <div className="h-full w-full flex justify-between items-center gap-4  pt-6 pb-4 px-[15px]">
                <div className="flex flex-col h-auto items-start gap-2">
                    <span className="text-xl text-[#3E4146] font-bold">{data.info.title}</span>

                    <div className="w-full flex flex-col items-start justify-start gap-1 text-[#3E4146] text-md">
                        <span>
                            {`${year}-${month}-${day}`}
                        </span>
                        <span>
                            {`${hours}:${minutes}`}
                        </span>
                    </div>

                    <Link href={`/perfil/${data.author.id}`} className="">
                        <div className='flex gap-2 items-center justify-start w-full'>
                            <Image src={data.author.image} alt={'avatar-image'} height={30} width={30} className='rounded-full' />
                            <span className='text-sm italic text-right truncate w-full text-[#3E4146]'>{name}</span>
                        </div>
                    </Link>
                </div>

                <div className="h-full w-fit flex flex-col items-end justify-between ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_732_1734)">
                            <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_732_1734">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div className="w-fit h-fit flex items-center gap-2">
                        <span className='text-md italic text-[#3E4146]'>{data.attendeesCount}</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_405_1186)">
                                <path d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L11.45 22.63C11.79 22.85 12.22 22.85 12.56 22.63L20.12 17.59C20.65 17.23 21 16.62 21 15.93V3C21 1.9 20.1 1 19 1ZM18.3 7.7L10.71 15.29C10.32 15.68 9.69 15.68 9.3 15.29L5.71 11.7C5.32 11.31 5.32 10.68 5.71 10.29C6.1 9.9 6.73 9.9 7.12 10.29L10 13.17L16.88 6.29C17.27 5.9 17.9 5.9 18.29 6.29C18.68 6.68 18.69 7.31 18.3 7.7Z" fill="#8DC63F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_405_1186">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <button
                        className='h-12 py-3 px-8 justify-center bg-[var(--green-hard)] text-white rounded-3xl'
                        onClick={() => setOpen(true)}
                    >
                        <span className='text-md'>
                            Asistir
                        </span>

                    </button>
                    <CardModal
                        open={open}
                        setOpen={setOpen}
                        modalTitle={data.info.title}
                        tagType={data.info.tag}
                        date={date.toString()}
                        minutes={minutes}
                        day={day}
                        hours={hours}
                        month={month}
                        year={year}>
                        <CompleteCard
                            id={data.id}
                            nombre={data.author.name}
                            asistentes={data.attendeesCount}
                            imagenAutor={data.author.image}
                            idAutor={data.author.id}
                            imagenEvento={image}
                            sessionUserId={sessionUserId}
                            minutes={minutes}
                            day={day}
                            hours={hours}
                            month={month}
                            year={year}
                        />
                        {/* <CompleteCard
                                id={data.id}
                                nombre={data.author.name}
                                asistentes={data.attendeesCount}
                                imagenAutor={data.author.image}
                                idAutor={data.author.id}
                                imagenEvento={data.info.image}
                                sessionUserId={sessionUserId}
                            /> */}
                    </CardModal>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: 'w-fit mx-auto h-fit transition-transform duration-300 rounded-3xl bg-white flex flex-col',
    tag: 'relative w-fit bottom-4',
}

export { MiniCard }