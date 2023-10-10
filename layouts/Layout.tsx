
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
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            {children}
      </main>
    </>
  )
}

export default Layout