import { MdOutlineDelete } from 'react-icons/md'
import { Avatar } from '../ui/Avatar'
import { useMutation } from '@apollo/client'
import { DELETE_SELF_COMMENT } from '@/graphql/client/comment'
import { GET_EVENT_BY_ID } from '@/graphql/client/event'
import { toast } from 'react-toastify'

interface CommentProps {
    id: string,
    userId: string
    userName: string,
    userImage: string,
    text: string,
    date: string,
    sessionUserId: string
}

const Comment = ({ id, userImage, userName, text, date, userId, sessionUserId }: CommentProps) => {
    const [deleteSelfComment] = useMutation<{ comment: Comment }>(DELETE_SELF_COMMENT,
        { variables: { ownerId: sessionUserId, commentId: id } });

    const executeDeleteSelfComment = async () => {
        try {
            await deleteSelfComment(
                { refetchQueries: [GET_EVENT_BY_ID] }
            );
            toast.success("¡Comentario eliminado satisfactoriamente!")
        } catch (error) {
            console.log(error)
            toast.error("No se ha logrado eliminar el comentario")
        }
    }

    return (
        <li>
            <div className='flex justify-start'>
                <div className='p-2'>
                    <Avatar
                        name={userName}
                        imageUrl={userImage}
                        userId={userId}
                    />
                </div>
                <div className='self-center text-lg font-bold'>·</div>
                <div className='p-2 self-center text-sm text-center'>
                    Hace {CalculateTimeAgo(date)}
                </div>
            </div>
            <div className='pl-16 pr-4 pb-2 text-justify leading-tight'>
                {text}
            </div>
            <div className='p-2 flex justify-end'>
                {sessionUserId === userId
                    ?
                    <button
                        className='flex justify-center items-center hover:bg-white rounded-full'
                        onClick={executeDeleteSelfComment}
                    >
                        <MdOutlineDelete
                            className='h-[20px] w-[20px]'
                        />
                    </button>
                    : <></>
                }
            </div>
        </li>
    )
}

const CalculateTimeAgo = (date: string) => {
    const timestamp = new Date(date).getTime();
    let timeAgo = (Date.now() - timestamp) / 1000
    if (timeAgo < 60) //Time en seconds
        return timeAgo.toFixed() + ' seg'
    timeAgo /= 60
    if (timeAgo < 60) //Tiempo in minutes
        return timeAgo.toFixed() + ' min'
    timeAgo /= 60
    if (timeAgo < 24) //Time in hors
        return timeAgo.toFixed() + ' horas'
    timeAgo /= 24
    if (timeAgo < 24) //Time in days
        return timeAgo.toFixed() + ' días'
    timeAgo /= 30
    if (timeAgo < 30) //Time in months
        return timeAgo.toFixed() + ' meses'
    timeAgo /= 12
    //Time in years
    return timeAgo.toFixed() + ' años'
}

export { Comment }