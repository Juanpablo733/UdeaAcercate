import { Navbar } from '@/components/navbar/Navbar'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '@/graphql/client/profile';
import { Profile } from '@/prisma/generated/type-graphql';
import { Loading } from '@/components/ui/Loading';
import { ExtendedEvent, GET_EVENTS_ATTENDING, GET_EVENTS_CREATED } from '@/graphql/client/event';
import { MiniCardContainer } from '@/components/card/MiniCardContainer';
import { useState } from 'react';
import { useUserData } from '@/hooks/useUserData';
import InfoProfile from '@/components/profile/InfoProfile';
import { CgProfile } from "react-icons/cg";
import { LuCalendarRange } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";

const Perfil = () => {
    const { userData } = useUserData();
    const router = useRouter();
    const [eventType, setEventType] = useState('created');
    const id = router.query.id;
    const { data: profileData, loading: loadingProfile, error: errorProfile } = useQuery<{ profile: Profile }>(
        GET_PROFILE, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    );
    const { data: eventsCreatedData, loading: loadingCreated, error: errorCreated } = useQuery<{ eventsCreated: ExtendedEvent[] }>(
        GET_EVENTS_CREATED, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    const { data: eventsAttendingData } = useQuery<{ eventsAttending: ExtendedEvent[] }>(
        GET_EVENTS_ATTENDING, { variables: { userId: id }, fetchPolicy: 'no-cache' }
    )
    if (loadingCreated || loadingProfile) return (<Loading />)
    const profile = profileData?.profile
    const user = profile?.user
    const setCreatedType = async () => {
        setEventType('created')
    }
    const setAttendingType = async () => {
        setEventType('attending')
    }
    if(errorProfile || errorCreated){
        console.log("errorCreated:", errorCreated)
        console.log("errorProfile:", errorProfile)
    }
    console.log('profile: ', profile)
    console.log('user: ', user)
    return (
        <>
            <title>
                Perfil | UdeAcercate
            </title>
            <div className='Yellow-little gap-15 flex flex-col min-h-screen'>
                <div>
                    <Navbar/>
                </div>

                {/* <div className='h-full flex flex-row'> */}
                <div className='flex mt-16'>
                    {/* <div className=' w-1/3 flex flex-col items-center p-4 gap-4'> */}
                    <div className=' flex flex-col items-center p-4 gap-5'>
                        <Image src={user?.image!} alt={'avatar-image'} height={200} width={200} className=' rounded-full'/>
                        <InfoProfile profile={profile} />
                    </div>
                    <div className='w-full debug'>
                        {/* <div className=' w-full p-4 grid grid-cols-2 gap-4 justify-items-center debug'> */}
                        <div className='flex p-4 gap-4 justify-center debug'>
                            <button className=
                                {eventType === 'created'
                                    // ? ' ButtonCard flex items-center h-14 w-60 justify-center'
                                    ? ' ButtonCard flex items-center h-14 w-50 justify-center lg:w-52'
                                    // : ' border-2 flex items-center h-14 w-60 justify-center'}
                                    : ' border-2 border-gray-400 bg-gray-200 rounded-2xl flex items-center h-14 w-50 lg:w-52 justify-center text-base font-bold'}
                                onClick={setCreatedType}>
                                Eventos Creados
                            </button>
                            <button className=
                                {eventType === 'attending'
                                    // ? ' ButtonCard flex items-center h-14 w-60 justify-center'
                                    ? ' ButtonCard flex items-center h-14 w-50 justify-center lg:w-52'
                                    // : ' border-2 flex items-center h-14 w-60 justify-center'}
                                    : ' border-2 border-gray-400 bg-gray-200 rounded-2xl flex items-center h-14 w-50 lg:w-52 justify-center text-base font-bold'}
                                onClick={setAttendingType}>
                                Eventos a asistir
                            </button>
                        </div>
                        {/* <div> */}
                            <MiniCardContainer data=
                                {eventType === 'created'
                                    ? eventsCreatedData?.eventsCreated
                                    : eventsAttendingData?.eventsAttending}
                                sessionUserId={userData?.user.id}
                            />
                        {/* </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Perfil