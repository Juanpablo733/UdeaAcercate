
import { IMinEvent } from '@/interfaces'
import React, { FC } from 'react'
import { MiniCard } from './MiniCard';


interface MiniCardContainerI {
  data: {
    id: string,
    tag: "Deportivo" | "Cultural" | "Academico",
    author: {
      name: string,
      image: string,
    }
    title: string,
    image: string,
    date: string,
    attendeesCount: number,
  }[];
}
const CardList: FC<MiniCardContainerI> = ({data}: MiniCardContainerI) => {
  
  return (
    <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] debug gap-4 pt-4 pb-4'>
      {data.map((item) => {
        return (
          <MiniCard
            key={item.id}
            id={item.id}
            nombreAutor={item.author.name}
            titulo={item.title}
            asistentes={item.attendeesCount}
            tipo={item.tag}
            fecha={item.date}
            imagenAutor={item.author.image}
          />
        );
      })}
    </div>
  )
}

export default CardList