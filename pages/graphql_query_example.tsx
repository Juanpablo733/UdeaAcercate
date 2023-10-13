import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { GET_USERS } from "@/graphql/client/users"
import { useQuery } from "@apollo/client"
import { User } from "@prisma/client"
import { Event } from "@/prisma/generated/type-graphql"

const UsersPage = () => {
    const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS, {
        fetchPolicy: 'cache-first'
    })
    if (error) return <p>error</p>

    if (loading) return <p>Loading...</p>

    return <tbody>
        {data?.users.map((user) => (
            <tr key={`user_${user.id}`}>
                <tr>{user.id}</tr>
                <tr>{user.name}</tr>
                <tr>{user.email}</tr>
                <tr>{String(user.emailVerified)}</tr>
                <tr>{user.image}</tr>
                <tr>========</tr>
            </tr>
        ))}
    </tbody>
}

const EventsPage = () => {
    const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    if (error){
        console.log(error)
        return <p>error</p>
    }
    if (loading) return <p>Loading...</p>

    return <tbody>
        {data?.events.map((event) => (
            <tr key={`user_${event.id}`}>
                <tr>{event.id}</tr>
                <tr>{event.tag}</tr>
                <tr>{event.author?.name}</tr>
                <tr>{event.author?.image}</tr>
                <tr>{event.title}</tr>
                <tr>{event.image}</tr>
                <tr>{String(event.date)}</tr>
                <tr>{event.attendeesCount}</tr>
                <tr>========</tr>
            </tr>
        ))}
    </tbody>
}

export default EventsPage