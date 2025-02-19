import React, { useState } from "react"
import { MdFlag, MdFlagCircle, MdOutlineDelete, MdOutlinedFlag } from "react-icons/md";
import DeleteEventWarningModal from "../modals/DeleteEventWarningModal";
import { toast } from "react-toastify";
import { DELETE_EVENT_BY_OWNER, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED, GET_EVENTS_PREVIEW } from "@/graphql/client/event";
import { useMutation, useQuery } from "@apollo/client";
import ReportEventModal from "../modals/ReportEventModal";
import { DELETE_REPORT, EVENT_REPORTED, REPORT_EVENT } from "@/graphql/client/report";
import ReportEventButton from "./ReportEventButton";
import DeleteReportButton from "./DeleteReportButton";

// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({ 
//   cloud_name: 'duha3yo9m', 
//   api_key: '188879924249237', 
//   api_secret: 'r1GNKCCsW03NUGitpoV0E7q9yPM' 
// });

interface DeleteButtonProps {
    idAutor: string,
    sessionUserId: string,
    eventId: string,
}

export default function DeleteOrReportEventButton({ idAutor, sessionUserId, eventId }: DeleteButtonProps) {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [reason, setReason] = useState("")
    const [deleteEvent] = useMutation(DELETE_EVENT_BY_OWNER,
        { variables: { ownerId: sessionUserId, eventId: eventId } });
    const [reportEvent] = useMutation(REPORT_EVENT,
        { variables: { userId: sessionUserId, eventId: eventId, reason } }
    )
    const { data, loading } = useQuery(EVENT_REPORTED,
        {
            variables: { userId: sessionUserId, eventId: eventId },
            fetchPolicy: "network-only"
        }
    )
    const [deleteReport] = useMutation(DELETE_REPORT,
        { variables: { userId: sessionUserId, eventId: eventId } }
    )
    const isReportedAlready = data?.eventReported
    console.log("Reported:", data)
    const executeDeleteEvent = async () => {
        try {
            // const result = await cloudinary.uploader.destroy('iecmd03sw24bypyssyao');
            // console.log(result);

            const resultado = await deleteEvent(
                { refetchQueries: [GET_EVENTS_PREVIEW, GET_EVENTS_CREATED, GET_EVENTS_ATTENDING] }
            );
            toast.success("¡Evento eliminado con éxito!")
        } catch (error) {
            toast.error("No se ha eliminado este evento")
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    const executeReportEvent = async () => {
        try {
            const resultado = await reportEvent(
                { refetchQueries: [EVENT_REPORTED] }
            );
            toast.success("Se ha reportado este evento")
        } catch (error) {
            toast.error("No se ha reportado este evento")
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    const executeDeleteReport = async () => {
        try {
            const resultado = await deleteReport(
                { refetchQueries: [EVENT_REPORTED] }
            );
            toast.success("Se ha eliminado el reporte de este evento")
        } catch (error) {
            toast.error("No se ha eliminado el reporte de este evento")
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    return (
        idAutor === sessionUserId
            ?
            <>
                < button
                    className='flex justify-center items-center hover:bg-gray-200 rounded-full'
                    onClick={() => setOpenModal(true)}
                >
                    <MdOutlineDelete
                        className='h-[20px] w-[20px]'
                    />
                </button>

                <DeleteEventWarningModal
                    open={openModal}
                    setOpen={setOpenModal}
                    onAccept={executeDeleteEvent} />
            </>
            : <>
                {loading
                    ? <></>
                    :
                    isReportedAlready
                        ?
                        <DeleteReportButton
                            open={openModal}
                            setOpen={setOpenModal}
                            onAccept={executeDeleteReport}
                        />
                        :
                        <ReportEventButton
                            open={openModal}
                            setOpen={setOpenModal}
                            reason={reason}
                            setReason={setReason}
                            onAccept={executeReportEvent}
                        />
                }
            </>
    )
}