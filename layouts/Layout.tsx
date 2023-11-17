
// import Navbar from '@/components/ui/Navbar'
import { Navbar } from '@/components/navbar/Navbar';
import React, { FC, PropsWithChildren } from 'react'

interface LayoutProps{
    image: string, 
    name: string,
  children: JSX.Element;
}

const Layout = ({children, image, name }: LayoutProps) => {
  return (
    <>
        <nav>
            {/* <Navbar image={image} name= {name}/> */}
            <Navbar/>
        </nav>
        <main style={{
            margin: '80px auto',
            minWidth: '430px',
            maxWidth: '1440px',
            padding: '0px 30px',
            border: '1px red solid'
        }}>
            {children}
      </main>
    </>
  )
}

export default Layout