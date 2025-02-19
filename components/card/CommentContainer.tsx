import { Comment } from "./Comment";
import { Comment as CommentData } from '@/prisma/generated/type-graphql';


interface CommentContainerI {
    data: CommentData[] | undefined
    sessionUserId: string
}

const CommentContainer = ({ data, sessionUserId }: CommentContainerI) => {
    return (
        <ul className='max-h-80 overflow-y-auto'>
            {data?.map((item) => {
                return (
                    <Comment
                        key={item.id}
                        id={item.id}
                        userName={item.user?.name ?? ''}
                        userImage={item.user?.image ?? ''}
                        text={item.text}
                        date={item.dateTime.toString()}
                        userId={item.user?.id ?? ''}
                        sessionUserId={sessionUserId}
                    />
                )
            })}
        </ul>
    )
}

export { CommentContainer }