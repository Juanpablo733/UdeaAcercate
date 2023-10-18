
import { IMinEvent } from '@/interfaces'
import React, { FC } from 'react'
import { MiniCard } from './MiniCard';
import { Card } from './Card';

interface Props {
    events: IMinEvent[];
}

const CardList: FC<Props> = ({events}) => {
  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] debug'>
      {
        events.map(event => {
          return(
            <MiniCard key={event.nombre} nombre='Santiago Bedoya' titulo='Evento medellin' asistentes={0} tipo='Deportivo' fecha='10/23/2000' />
          )
        })
      }
      
    </div>
  )
}

export default CardList