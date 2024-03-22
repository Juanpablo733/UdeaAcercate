import { ExtendedEvent } from '@/graphql/client/event';
import { MiniCard } from './MiniCard';

interface MiniCardContainerI2 {
    data?: ExtendedEvent[];
    sessionUserId: string
}

const MiniCardContainer = ({ data, sessionUserId }: MiniCardContainerI2) => {
    if (data)
        return (
            <div className='grid md:grid-cols-2 gap-4 justify-items-center px-4'>
                {
                    data.map((item) => {
                        return (
                            <MiniCard
                                key={item.id}
                                id={item.id}
                                titulo={item.title}
                                asistentes={item.attendeesCount}
                                tipo={item.tag}
                                fecha={item.date.toString()}
                                minutes={item.minutes}
                                hours={item.hours}
                                day={item.day}
                                month={item.month}
                                year={item.year}
                                idAutor={item.author?.id??""}
                                nombreAutor={item.author?.name??""}
                                imagenAutor={item.author?.image??""}
                                imagenEvento={item?.image??""}
                                sessionUserId={sessionUserId}
                            />
                        );
                    })
                }
            </div>
        );
    else {
        return (
            <div className='justify-center' >
                No hay eventos
            </div>
        )
    }
};

export { MiniCardContainer };