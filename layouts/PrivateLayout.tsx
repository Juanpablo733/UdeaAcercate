import { useSession, signIn } from "next-auth/react";
import React, { PropsWithChildren, useEffect } from "react";
import { useUserData } from '@/hooks/useUserData';
import { Loading } from "@/components/ui/Loading";
import router, { useRouter } from 'next/router';
import { GET_PROFILE } from '@/graphql/client/profile'
import { useQuery } from "@apollo/client";
import { Profile } from "@/prisma/generated/type-graphql";


const PrivateLayout = ({ children }: PropsWithChildren) => {

    const { loading: loadingUser, session, status, userData } = useUserData();
    const notVerified = userData?.user?.emailVerified === null || userData?.user?.emailVerified === undefined
    const userId = userData?.user.id
    console.log("Email no verificado: ", notVerified)
    console.log("Status:", status)
    console.log("Session: ", session)
    const { data: profileData, loading: loadingPerfil, error } = useQuery<{ profile: Profile }>(
        GET_PROFILE,
        {
            variables: { userId },
            fetchPolicy: 'no-cache',
        }
    )
    console.log("loadingProfile:", loadingPerfil)
    useEffect(() => {
        if (status === "authenticated") {
            if (!loadingUser && notVerified) {
                router.push('/verifyEmail')
            }
        }
        if (!loadingPerfil) {
            if (profileData?.profile === null || profileData?.profile === undefined) {
                router.push('/crearPerfil');
            }
        }
    }, [])

    console.log("Perfil:", profileData?.profile)

    if (loadingUser) return (<Loading />)

    if (status === "loading") return (<Loading />)

    if (loadingPerfil) return (<Loading />)

    if (!session) {
        signIn('google', { callbackUrl: '/home' });
    } else {
        return (
            <div>
                {children}
            </div>
        )
    }



}

export default PrivateLayout