import { Comment } from "./Comment";

interface CommentContainerI {
    data: {
        id: string,
        text: string
        dateTime: string,
        user: {
            id: string
            name: string,
            image: string,
        }
    }[]
}

const CommentContainer = ({ data }: CommentContainerI) => {
    return (
        <ul className='rounded-lg bg-gray-200 max-h-80 overflow-y-auto'>
            {data.map((item) => {
                return (
                    <Comment
                        id={item.id}
                        userName={item.user.name}
                        userImage={item.user.image}
                        text={item.text}
                        date={item.dateTime}
                        userId={item.user.id}
                    />
                )
            })}
        </ul>
    )
}

export { CommentContainer }