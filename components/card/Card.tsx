import React from 'react'
import {MdOutlineLabel, MdOutlinePlace,MdOutlinePermIdentity, MdClose} from "react-icons/md";
import { TagType } from '../tag-type/TagType';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='w-[700px] h-[500px] debug rounded-3xl pt-5 pr-4 pl-4 bg-white gap-4 flex flex-col'>
      <nav className='flex justify-between debug'>
        <div className='debug flex gap-1'>
          <MdOutlineLabel className="h-8 w-8"/>
          <TagType type={'Deportivo'} />
        </div>
        <div className='debug flex gap-4 items-center'>
          <span className='text-lg font-bold'>Juan Pablo Bedoya Sanchez</span>
          <Image src={'/juan.png'} alt={'avatar-image'} height={30} width={30} className='debug'/>
          <button className='debug'>
            <MdClose className="h-8 w-8"/>
          </button>
        </div>
      </nav>
      <h2 className='text-base debug flex justify-center'>Salida campus Medellín</h2>
      <div className='debug h-1/2 flex gap-5'>

        <div className='debug'>
          <Image src={'/evento1.png'} alt={'evento1'} width={1500} height={10} className='debug h-full'/>
        </div>
        <div className='debug flex flex-col justify-between'>
          <p className="max-h-36 overflow-auto font-medium ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Eum accusantium fugit repellendus neque ab dignissimos!
            Maiores cum corrupti quibusdam dolore! Molestias porro error
            suscipit iure rerum architecto facilis ratione libero!
          </p>
          <div className='flex gap-2 items-center'>
            <MdOutlinePlace className = "h-8 w-8" />
            <span className='font-bold'>LUGAR:</span>
            <span className='font-bold'>Plazoleta Barrientos</span>
          </div>
        </div>
      </div>
      <div className='debug flex gap-10'>
        <span className='font-bold text-lg'>29 - Sept - 23</span>
        <div className='flex items-center'>
          <MdOutlinePermIdentity className={'h-8 w-8'} />
          <span className='font-bold'>5</span>
        </div>
      </div>
      <div className='debug flex justify-between'>
        <button className='debug ButtonCard'>Asistir</button>
        <input type="text" className='border debug w-1/2 rounded-2xl text-center' placeholder='comentar'/>
        <button className='debug ButtonCard'>Comentarios</button>
      </div>
    </div>
  )
}

export {Card}