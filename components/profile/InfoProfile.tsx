
import { Profile } from '@/prisma/generated/type-graphql';

interface ProfileProps {
    profile: Profile
}
const InfoProfile = ({profile}: ProfileProps) => {
    return(
        <div className='flex flex-col gap-6 items-center py-4'>

            {/* <div className='InfoProfile'>
                <span className='text-xl font-extrabold'>{profile.user?.name}</span>
            </div> */}
            <h1 className='text-[var(--green-hard)] text-3xl font-extrabold'>Información del perfil</h1>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Unidad Académica o Administrativa</span>
                <span className='text-sm font-semibold'>{profile?.faculty}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Programa o Dependencia</span>
                <span className='text-sm font-semibold'>{profile?.career}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Vínculo</span>
                <span className='text-sm font-semibold'>{profile?.type}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Campus</span>
                <span className='text-sm font-semibold'>{profile?.campus?.replace('_', ' ')}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Descripción</span>
                <span className='text-sm font-semibold'>{profile?.description}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Hobbies</span>
                <span className='text-sm font-semibold'>{profile?.hobbies}</span>
            </div>
            <div className='InfoProfile'>
                <span className='text-sm font-extrabold text-[var(--green-hard)]'>Redes Sociales</span>
                <span className='text-sm font-semibold'>{profile?.socialLinks}</span>
            </div>
        </div>
    )
}

export default InfoProfile
