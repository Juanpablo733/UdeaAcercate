
import { IMinEvent } from '@/interfaces'
import { Grid } from '@mui/material';
import React, { FC } from 'react'
import { MiniCard } from './MiniCard';

interface Props {
    events: IMinEvent[];
}
const CardList: FC<Props> = ({events}) => {
  return (
    <Grid container>
        {
            events.map(event => (
                <MiniCard key={event.nombre} nombre='Santiago Bedoya' titulo='Evento medellin' asistentes={0} tipo='Deportivo' fecha='10/23/2000' />
            ))
        }
    </Grid>
  )
}

export default CardList