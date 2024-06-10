import React, { useState } from "react"
import { MdOutlineDelete } from "react-icons/md";
import DeleteEventWarningModal from "../modals/DeleteEventWarningModal";
import { toast } from "react-toastify";
import { DELETE_EVENT_BY_OWNER, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED, GET_EVENTS_PREVIEW } from "@/graphql/client/event";
import { useMutation } from "@apollo/client";

// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({ 
//   cloud_name: 'duha3yo9m', 
//   api_key: '188879924249237', 
//   api_secret: 'r1GNKCCsW03NUGitpoV0E7q9yPM' 
// });

interface DeleteButtonProps{
    idAutor: string, 
    sessionUserId: string, 
    eventId: string,
}

export default function DeleteEventButton({idAutor, sessionUserId, eventId}: DeleteButtonProps ) {
    const [wantDelete, setWantDelete] = useState<boolean>(false);
    const [deleteEvent] = useMutation(DELETE_EVENT_BY_OWNER,
        { variables: { ownerId: sessionUserId, eventId: eventId } });
    const executeDeleteEvent = async () => {
        try {
            // const result = await cloudinary.uploader.destroy('iecmd03sw24bypyssyao');
            // console.log(result);
            
            const resultado = await deleteEvent(
                { refetchQueries: [GET_EVENTS_PREVIEW, GET_EVENTS_CREATED, GET_EVENTS_ATTENDING] }
            );
            toast.success("¡Evento eliminado con éxito!")
        } catch (error) {
            toast.error("No se ha eliminado el evento")
            console.error('Error al ejecutar la mutación:', error);
        }
    }
    
    return (
         idAutor === sessionUserId
            ?
            <>
                < button
                    className='flex justify-center items-center hover:bg-gray-200 rounded-full'
                    onClick={() => setWantDelete(true)}
                >
                    <MdOutlineDelete
                        className='h-[20px] w-[20px]'
                    />
                </button>

                <DeleteEventWarningModal
                    open={wantDelete}
                    setOpen={setWantDelete}
                    onAccept={executeDeleteEvent} />
            </>
            : <></>
    )
}