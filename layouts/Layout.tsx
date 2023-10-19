
import Navbar from '@/components/ui/Navbar'
import React, { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
        <nav>
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