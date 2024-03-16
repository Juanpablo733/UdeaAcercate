import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center p-20 h-screen'>
      <ReactLoading type='spokes' color='#026937' height='20vh' width='20vh' />
      <p className='text-2xl m-10'>Cargando</p>
    </div>
  )
}

export { Loading }