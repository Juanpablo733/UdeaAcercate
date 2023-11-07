import { Avatar } from '../ui/Avatar'

interface CommentProps {
    id: string,
    userName: string,
    userImage: string,
    text: string,
    date: string
}

const Comment = ({ id, userImage, userName, text, date }: CommentProps) => {
    return (
        <li>
            <Avatar name={userName} imageUrl={userImage} />
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