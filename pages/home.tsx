import { Card } from '@/components/card/Card';
import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 h-screen'>
        <Navbar>
            <div className='flex gap-4 items-center'>
                <span className='debug text-white'>Juan Pablo Bedoya Sanchez</span>
                <Image src={'/juan.png'} alt={'avatar-image'} height={50} width={50} className='debug'/>
            </div>
        </Navbar>
        <div className='debug flex gap-32 justify-center'>
            <div className='debug flex h-24 w-40 gap-12 items-center'>
                <span>crear evento</span>
                <span>icono</span>
            </div>
            <div className='debug flex h-24 w-40 gap-12 items-center'>
                <span>filtrar por evento</span>
                <span>icono</span>
            </div>
        </div>
        <div className='debug flex justify-center'>
            <div className='debug h-24 w-[448px] flex items-center justify-center gap-12'>
                <span>buscar</span>
                <span>icono</span>
            </div>
        </div>
        <Card/>
    </div>
  )
}

export default Home;