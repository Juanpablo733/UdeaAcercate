import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


interface AvatarProps {
  userId: string,
  name: string,
  imageUrl: string,
}
const Avatar = ({ userId, name, imageUrl }: AvatarProps) => {
  return (
    <Link href={`/perfil/${userId}`}>
      <div className='flex gap-2 items-center w-full h-full'>
        <Image src={imageUrl} alt={imageUrl} height={50} width={50} className='rounded-full' />
        <span className='Title font-bold'>{name}</span>
      </div>
    </Link>
  )
}

export { Avatar }