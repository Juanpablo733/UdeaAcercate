import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
        <ReactLoading type='spokes' color='#026937' height={667} width={375} />
        <p className='text-5xl'>CARGANDO</p>
    </div>
  )
}

export  {Loading}