import CompleteCard from '@/components/card/CompleteCard'
import CardModal from '@/components/modals/CardModal'
import ReportDetailsModal from '@/components/modals/ReportDetailsModal'
import { Loading } from '@/components/ui/Loading'
import { DELETE_EVENT_BY_ADMIN, GET_FULL_EVENT_BY_ID } from '@/graphql/client/event'
import { GET_REPORTED_EVENTS } from '@/graphql/client/report'
import { GRANT_ADMIN_TO_USER, IS_USER_ADMIN } from '@/graphql/client/role'
import { formatDateTime } from '@/util/stringFormatter'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
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
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const { data: eventData, loading, error } = useQuery(GET_FULL_EVENT_BY_ID,
        { variables: { eventId } }
    )
    const [deleteEvent] = useMutation(DELETE_EVENT_BY_ADMIN,
        { variables: { eventId, adminId: sessionUserId } }
    )

    const data = eventData?.event
    useEffect(() => {
        const { date, time } = formatDateTime(new Date(data?.info.date));
        setDate(date);
        setTime(time);
    }, [data?.info.date]);
    if (loading)
        return (<></>)
    console.log("Event data:", data)

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
                >
                    <CompleteCard
                        id={data?.id}
                        nombre={data?.author.name}
                        asistentes={data?.attendeesCount}
                        imagenAutor={data?.author.image}
                        idAutor={data?.author.id}
                        imagenEvento={image}
                        sessionUserId={sessionUserId}
                        date={date}
                        time={time}
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
                    <h2 className="text-gray-700 dark:text-gray-200">
                        {reportCount}
                    </h2>
                    <button
                        onClick={() => setOpenDetail(true)}
                    >Detalle</button>
                    <ReportDetailsModal
                        open={openDetail}
                        setOpen={setOpenDetail}
                        eventId={eventId}
                    >

                    </ReportDetailsModal>
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