import { useSession, signIn } from "next-auth/react";
import React, { PropsWithChildren, useEffect } from "react";


const PrivateLayout = ({ children }: PropsWithChildren) => {
    const { data: session, status } = useSession();
    useEffect(() => {
        console.log("session: ", session)
        console.log("status: ", status)
    }, [session, status]);

    if (status === "loading") return <div>loading...</div>

    if (!session) {
        signIn('auth0');
    } else {
        return (
            <div>
                Esta es una ruta privada
                {children}
            </div>
        )
    }
}

export default PrivateLayout