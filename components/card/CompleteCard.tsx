
import Image from 'next/image'
import React, { useState } from 'react'
import { Avatar } from '../ui/Avatar'
import { MdOutlinePermIdentity, MdOutlinePlace, MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'

const CompleteCard = () => {
    const[comentario, setComentario] = useState('');
  return (
    <div className='debug flex'>
        {/* lado izquierdo */}
        <div className='debug flex flex-col h-full w-full'>
            <Image src={'/evento1.png'} width={1000} height={0} alt={''}/>
            <div className='flex justify-between p-2'>
                <div className='flex gap-2 items-center'>
                    <MdOutlinePlace className = "h-8 w-8" />
                    <span className='font-bold'>LUGAR:</span>
                    <span className='font-bold'>Plazoleta Barrientos</span>
                </div>
                <div className='flex'>
                    <button className=' ButtonCard'>Asistir</button>
                    <div className='flex items-center'>
                        <MdOutlinePermIdentity className={'h-8 w-8'} />
                        <span className='font-bold'>5</span>
                    </div>
                </div>
            </div>
        </div>
        {/* lado derecho */}
        <div className='debug flex flex-col h-full w-full p-2 gap-2'>
            <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'}/>
            <div>
                Lorem ipsum dolor sit amet.
                Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                Qui error suscipit aut laborum voluptatem et officia dolores ea adipisci quasi.
            </div>
            
            <ul className='debug rounded-lg bg-gray-300'>
                <li>
                    <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'}/>
                    <div>
                        Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                    </div>
                </li>
                <li>
                    <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'}/>
                    <div>
                        Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                    </div>
                </li>
                <li>
                    <Avatar name={'Santiago Bedoya'} imageUrl={'/juan.png'}/>
                    <div>
                        Lorem ipsum dolor sit amet. Est perspiciatis vero sit obcaecati vero est doloremque quaerat ut odit aliquam.
                    </div>
                </li>
            </ul>
            <div className='flex'>
                <input
                    className=' w-full rounded-2xl text-center bg-green-100'
                    type="text"
                    value={comentario}
                    placeholder='comentar'
                    onChange={(e) => {
                        setComentario(e.target.value);
                    }}
                />
                <button 
                    onClick={() => {
                        console.log('comentario: ', comentario);
                }}>
                    <MdOutlineSubdirectoryArrowLeft className={'h-8 w-8'}/>
                </button>
            </div>

        </div>
    </div>
  )
}

export default CompleteCard