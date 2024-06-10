import CompleteCard from '@/components/card/CompleteCard'
import CardModal from '@/components/modals/CardModal'
import { Loading } from '@/components/ui/Loading'
import { DELETE_EVENT_BY_ADMIN, GET_FULL_EVENT_BY_ID } from '@/graphql/client/event'
import { GET_REPORTED_EVENTS } from '@/graphql/client/report'
import { GRANT_ADMIN_TO_USER, IS_USER_ADMIN } from '@/graphql/client/role'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface ReportRowProps {
    eventId: string,
    eventTitle: string,
    authorId: string,
    authorName: string,
    sessionUserId: string,
    reportCount: number
}

export const ReportRow = ({ eventId, eventTitle, authorId, authorName, sessionUserId, reportCount }: ReportRowProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const { data: eventData, loading, error } = useQuery(GET_FULL_EVENT_BY_ID,
        { variables: { eventId } }
    )
    const [deleteEvent] = useMutation(DELETE_EVENT_BY_ADMIN,
        { variables: {eventId, adminId: sessionUserId} }
    )
    if (loading)
        return (<></>)
    const data = eventData?.event
    console.log("Event data:", data)
    const date = new Date(data?.info.date)
    const day = date.getDay().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const image = data?.info.image == '' ? '/evento1.png' : data?.info.image

    const executeDeleteEvent = async () => {
        try {
            await deleteEvent({
                refetchQueries: [GET_REPORTED_EVENTS]
            })
            toast.success("Se ha eliminado este evento correctamente");
        }
        catch (error) {
            toast.error('No se ha eliminado este evento');
        }
        console.log("Borrando evento")
    }

    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <button onClick={() => setOpen(true)}
                    className="font-medium text-gray-800 dark:text-white ">
                    {eventTitle}
                </button>
                <CardModal
                    open={open}
                    setOpen={setOpen}
                    modalTitle={data?.info.title}
                    tagType={data?.info.tag}
                    date={date.toString()}
                    minutes={minutes}
                    day={day}
                    hours={hours}
                    month={month}
                    year={year}>
                    <CompleteCard
                        id={data?.id}
                        nombre={data?.author.name}
                        asistentes={data?.attendeesCount}
                        imagenAutor={data?.author.image}
                        idAutor={data?.author.id}
                        imagenEvento={image}
                        sessionUserId={sessionUserId}
                        minutes={minutes}
                        day={day}
                        hours={hours}
                        month={month}
                        year={year}
                    />
                </CardModal>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <Link href={`/perfil/${authorId}`}>
                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        {authorName}
                    </div>
                </Link>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">
                        {reportCount}
                    </h4>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">

                <div className="flex items-center justify-center">
                    <button
                        className='ButtonCard disabled:bg-slate-400'
                        onClick={executeDeleteEvent}
                    >
                        Eliminar evento
                    </button>
                </div>
            </td>
        </tr>
    )
}