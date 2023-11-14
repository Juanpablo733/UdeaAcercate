import { Avatar } from '../ui/Avatar'

interface CommentProps {
    id: string,
    userId: string
    userName: string,
    userImage: string,
    text: string,
    date: string
}

const Comment = ({ id, userImage, userName, text, date, userId }: CommentProps) => {
    return (
        <li>
            <Avatar 
            name={userName} 
            imageUrl={userImage} 
            userId={userId}
            />
            <div>
                {text}
            </div>
            <div>
                {date}
            </div>
        </li>
    )
}

export { Comment }