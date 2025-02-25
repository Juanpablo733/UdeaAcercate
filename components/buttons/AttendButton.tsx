import { FIND_ATTENDEE, ADD_ATTENDEE, QUIT_ATTENDEE } from "@/graphql/client/attendee";
import { GET_EVENT_BY_ID } from "@/graphql/client/event";
import { Attendee } from "@/prisma/generated/client";
import { useQuery, useMutation } from "@apollo/client";

const AttendButton = ({ sessionUserId, eventId }: { sessionUserId: string, eventId: string }) => {
    const { data: attendeeData, loading: loadingAttendee, error: errorAttendee } =
        useQuery<{ attendee: Attendee }>(FIND_ATTENDEE, {
            variables: { userId: sessionUserId, eventId: eventId },
            fetchPolicy: 'cache-first'

        });

    const [addAttendee] = useMutation<{ attendee: Attendee }>(ADD_ATTENDEE,
        {
            variables: { userId: sessionUserId, eventId: eventId },
        });

    const [quitAttendee] = useMutation<{ attendee: Attendee }>(QUIT_ATTENDEE,
        {
            variables: { userId: sessionUserId, eventId: eventId },
        });

    const executeAddAttendee = async () => {
        try {
            const resultado = await addAttendee({
                refetchQueries: [GET_EVENT_BY_ID, FIND_ATTENDEE]
            });
            console.log("AddAttendee: ", resultado);

        } catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }
    }

    const executeQuitAttendee = async () => {
        try {
            await quitAttendee(
                { refetchQueries: [GET_EVENT_BY_ID, FIND_ATTENDEE] }
            )
        }
        catch (error) {
            console.error('Error al ejecutar la mutación:', error);
        }

    }


    return (
        <button
            className={attendeeData?.attendee ? styles.outline : styles.original}
            onClick={attendeeData?.attendee ? executeQuitAttendee : executeAddAttendee}
        >
            <span className='text-md'>
                {attendeeData?.attendee ? "Asistiré" : "Asistir"}
            </span>
            {attendeeData?.attendee ?
                <svg className="h-6 w-6" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11.17L1.83 7L0.41 8.41L6 14L18 2L16.59 0.589996L6 11.17Z" fill="#026937" />
                </svg>

                : <></>
            }
            {/* <g clip-path="url(#clip0_769_887)">
                    </g>
                    <defs>
                        <clipPath id="clip0_769_887">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs> */}
        </button>
    );
};

const styles = {
    original: "h-12 w-full py-3 px-8 justify-center bg-[var(--green-hard)] text-white rounded-3xlh-12 w-full py-3 px-8 justify-center bg-[var(--green-hard)] text-white rounded-3xl",
    outline: "h-12 w-full py-3 px-8 gap-[10px] flex y-center x-center border bg-white border-[var(--green-hard)] text-[var(--green-hard)] rounded-3xl",
}

export { AttendButton };