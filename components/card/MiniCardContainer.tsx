import { ExtendedEvent } from '@/graphql/client/event';
import { MiniCard } from './MiniCard';

interface MiniCardContainerI2 {
    data?: ExtendedEvent[];
    sessionUserId: string
}

const MiniCardContainer = ({ data, sessionUserId }: MiniCardContainerI2) => {
    if (data)
        return (
            <div className='grid md:grid-cols-2 gap-4 justify-items-center px-2 sm:px-4 debug'>
                {
                    data.map((item) => {
                        return (
                            <MiniCard
                                key={item.id}
                                data={item}
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