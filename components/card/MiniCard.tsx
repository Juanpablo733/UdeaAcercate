import { MdOutlineLabel, MdOutlinePermIdentity } from "react-icons/md";
import React, { useState } from 'react'
import { TagType } from '../tag-type/TagType'
import Image from 'next/image';
import CardModal from "../modals/CardModal";
import CompleteCard from "./CompleteCard";
import Link from "next/link";
import { ExtendedEvent } from "@/graphql/client/event";
import { IoIosStarOutline } from "react-icons/io";
interface MiniCardProps {
    data: ExtendedEvent,
    sessionUserId: string
}

const MiniCard = ({ data, sessionUserId }: MiniCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const date = new Date(data.info.date)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const image = data.info.image == '' ? '/evento1.png' : data.info.image
    // console.log('url? ', image);

    return (
        // <div className='w-full max-w-[600px] mx-auto h-[350px] rounded-3xl pt-5 pr-4 pl-4 bg-white gap-4 flex flex-col pb-4 shadow-xl '>
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

            {/* <div className='flex justify-between items-center'> */}
            {/* <header className='flex justify-between items-center gap-4 w-full'>
                <div className='flex gap-1 h-max w-full'>
                    {
                        data.info.official ?
                            <IoIosStarOutline className='h-8 w-8 ' />
                            :
                            <MdOutlineLabel className="h-8 w-8" />
                    }
                </div>
                <Link href={`/perfil/${data.author.id}`} className="w-3/5">
                    <div className='flex gap-2 items-center justify-end w-full'>
                        <span className='text-sm font-bold text-right truncate w-full'>{data.author.name}</span>
                        <Image src={data.author.image} alt={'avatar-image'} height={30} width={30} className='rounded-full' />
                    </div>
                </Link>
            </header> */}

            {/* <section className="gap-1 flex flex-col justify-between h-full">

                <div className="flex flex-col h-auto items-center ">
                    <span className="text-sm font-semibold">{data.info.title}</span>

                </div>

                <div className="flex gap-4 justify-between h-12 ">
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
                            onClick={() => {
                                console.log(`Event Id: ${data.id}
                                Author ID ${data.author.id}
                                Session User ${sessionUserId}`)
                                setOpen(true)
                            }
                            }
                        >
                            Ver Más
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
                        {/* </CardModal>
                    </div>
                    <div className="w-1/4 flex justify-center items-center">
                        <MdOutlinePermIdentity className={'h-8 w-8'} />
                        <span className='font-bold'>{data.attendeesCount}</span>
                    </div>

                </div> 

            </section> */}
        </div>
        // </div>
    )
}

const styles = {
    container: 'w-full min-w-[360px] max-w-[419px] mx-auto h-[400px] transition-transform duration-300  rounded-3xl bg-white flex flex-col',
    tag: 'relative w-fit bottom-4',
}

export { MiniCard }