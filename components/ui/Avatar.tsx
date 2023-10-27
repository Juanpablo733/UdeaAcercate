import React from 'react'
import Image from 'next/image';


interface AvatarProps {
    name: string, 
    imageUrl: string,
}
const Avatar = ({name, imageUrl}: AvatarProps) => {
  return (
    <div className='flex gap-4 items-center'>
        <Image src={imageUrl} alt={imageUrl} height={50} width={50} className='' />
        <span className=' text-black font-bold'>{name}</span>
    </div>
  )
}

export {Avatar}