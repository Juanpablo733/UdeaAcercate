

import { Card } from '@/components/card/Card'
import CardList from '@/components/card/CardList'
import { MiniCard } from '@/components/card/MiniCard'
import { initialData } from '@/database/events'
import Layout from '@/layouts/Layout'
import React from 'react'

const Components = () => {
  return (
    <Layout>
      <CardList events={ initialData.events }/>
    </Layout>
  )
}

export default Components