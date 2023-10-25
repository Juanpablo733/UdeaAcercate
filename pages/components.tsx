

import { Card } from '@/components/card/Card'
import CardList from '@/components/card/CardList'
import { MiniCard } from '@/components/card/MiniCard'
import { initialData } from '@/database/events'
import Layout from '@/layouts/Layout'
import React from 'react'

import { useQuery } from "@apollo/client"
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"

const Components = () => {
  
  const { data, loading, error } = useQuery<{ events: Event[] }>(GET_EVENTS_PREVIEW, {
    fetchPolicy: 'cache-first'
  })
  if (error){
      console.log(error)
      return <p>error</p>
  }
  if (loading) return <p>Loading...</p>
  console.log('data: ', data?.events);
  return (
    <Layout>
      <CardList events={ initialData.events }/>
      {/* <CardList events={ data?.events }/> */}
    </Layout>
  )
}

export default Components