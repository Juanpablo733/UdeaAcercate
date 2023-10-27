import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { GET_USERS } from "@/graphql/client/users"
import { useQuery } from "@apollo/client"
import { User } from "@prisma/client"
import { Event } from "@/prisma/generated/type-graphql"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import { Session } from 'next-auth/core/types';
import { useSession } from "next-auth/react"

export default function UsersPage() {
    // const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS, {
    //     fetchPolicy: 'cache-first'
    // })
    // if (error) return <p>error</p>

    // if (loading) return <p>Loading...</p>
    // console.log("Antes de getSession")
    // const session = await getServerSession(authOptions);
    const {data: Session, status} = useSession();
    console.log("Session: ", Session)

    return (<h2 className='text-2xl'>
        Bienvenido a UdeAcercate 
        {Session?.user?.name}
        </h2>)
    // return <tbody>
    //     {data?.users.map((user) => (
    //         <tr key={`user_${user.id}`}>
    //             <tr>{user.id}</tr>
    //             <tr>{user.name}</tr>
    //             <tr>{user.email}</tr>
    //             <tr>{String(user.emailVerified)}</tr>
    //             <tr>{user.image}</tr>
    //             <tr>========</tr>
    //         </tr>
    //     ))}
    // </tbody>
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
    console.log('data: ', data)
    console.log('data.events: ', data?.events)
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