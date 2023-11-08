import React from "react"
import { useSession } from 'next-auth/react';

const verifyEmail = () => {
    const { data: Session, status } = useSession();
    console.log("Session: ", Session)
    if (status === 'loading') return <p>Loading...</p>
    return (
        <>
        <div>
            Verifique su correo electrónico
            Email verificado: {Session?.user?.emailVerified ? Session?.user?.emailVerified : 'ninguno'}
        </div>
        </>
    )
}

export default verifyEmail