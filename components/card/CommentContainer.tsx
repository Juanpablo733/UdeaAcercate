import { Comment } from "./Comment";
import { Comment as CommentData} from '@/prisma/generated/type-graphql';


interface CommentContainerI {
    // data: {
    //     id: string,
    //     text: string
    //     dateTime: string,
    //     user: {
    //         id: string
    //         name: string,
    //         image: string,
    //     }
    // }
    data: CommentData[] | undefined
}

const CommentContainer = ({ data }: CommentContainerI) => {
    return (
        <ul className='rounded-lg bg-gray-200 max-h-80 overflow-y-auto'>
            {data?.map((item) => {
                return (
                    <Comment
                        key={item.id}
                        id={item.id}
                        userName={item.user?.name??''}
                        userImage={item.user?.image??''}
                        text={item.text}
                        date={item.dateTime.toString()}
                        userId={item.user?.id??''}
                    />
                )
            })}
        </ul>
    )
}

export { CommentContainer }