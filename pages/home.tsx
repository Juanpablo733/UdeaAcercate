import { Card } from '@/components/card/Card';
import {MiniCard} from '@/components/card/MiniCard';
import { Navbar } from '@/components/navbar/Navbar';
import Image from 'next/image';
import React from 'react'
import {MdAddCircleOutline, MdOutlineSearch, MdExpandMore} from "react-icons/md";
const Home = () => {
    const dataEvent = {
        tipo: "Deportivo",
        publicador: "Santiago Bedoya",
        titulo: "Salida Campus Medellín",
        imagen: "/imagen",
        descripcion: "evento en medellin blablabla...",
        fecha: "29-Sept-23",
        lugar: "Plazoleta Barrientos",
        asistentes: 5
    }
  return (
    <div className='flex flex-col gap-10 pb-4 Yellow-little debug'>
        <Navbar>
            <div className='flex gap-4 items-center'>
                <span className='debug text-white font-bold'>Juan Pablo Bedoya Sanchez</span>
                <Image src={'/juan.png'} alt={'avatar-image'} height={50} width={50} className='debug'/>
            </div>
        </Navbar>
        <div className='debug flex gap-32 justify-center'>
            <div className='debug flex gap-12 items-center bg-white rounded-2xl'>
                <span>crear evento</span>
                <MdAddCircleOutline className="h-8 w-8"/>
            </div>
            <div className='debug flex gap-12 items-center bg-white rounded-2xl'>
                <span>filtrar por evento</span>
                <MdExpandMore className="h-8 w-8"/>
            </div>
        </div>
        <div className='debug flex justify-center'>
            <div className='debug flex items-center justify-center gap-12 bg-white rounded-2xl'>
                <span>buscar</span>
                <MdOutlineSearch className="h-8 w-8"/>
            </div>
        </div>
        <div className=' debug grid grid-cols-3 gap-4 justify-items-center'>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
            <MiniCard nombre='Juan Pablo Bedoya Sánchez' tipo='Deportivo' titulo='Estudio Parcial Teoría de Lenguajes' asistentes={10} fecha='29-01-24'/>
            <MiniCard nombre='Santiago Bedoya Díaz' tipo='Cultural' titulo='Taller de danza' asistentes={20} fecha='30-10-23'/>
        </div>
    </div>
  )
}

export default Home;