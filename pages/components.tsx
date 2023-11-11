
import CardList from '@/components/card/CardList'
import Layout from '@/layouts/Layout'
import React from 'react'
import { useQuery } from "@apollo/client"
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"
import { signOut, useSession } from 'next-auth/react'

const Components = () => {
  
  const { data: Session, status } = useSession();
    const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
        fetchPolicy: 'cache-first'
    })
    const CloseSession = () => { signOut({ callbackUrl: '/' }) }
    console.log("Session: ", Session)
    if (status === 'loading') return <p>Loading...</p>

    console.log('antes de loading: ', data);
    if (error) {
        console.log("Error en carga de eventos",error)
        return <p>error</p>
    }
    if (loading) return <p>Loading...</p>
    console.log('despues de loading: ', data?.events);

  return (
    <Layout image={Session?.user?.image} name={Session?.user?.name}>
      <CardList data={ data?.events }/>
    </Layout>
  )
}

export default Components