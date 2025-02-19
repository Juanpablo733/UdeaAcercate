import { useSession, signIn } from "next-auth/react";
import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { useUserData } from '@/hooks/useUserData';
import { Loading } from "@/components/ui/Loading";
import router, { useRouter } from 'next/router';
import { GET_PROFILE } from '@/graphql/client/profile'
import { useQuery } from "@apollo/client";
import { Profile } from "@/prisma/generated/type-graphql";
import { Navbar } from "@/components/navbar/Navbar";
import { useIsAdminUser } from "@/hooks/useIsAdminUser";

interface PrivateLayoutProps {
    children: ReactNode,
    isAdminPage: boolean
}

const PrivateLayout = ({ children, isAdminPage }: PrivateLayoutProps) => {

    const { loading: loadingUser, session, status, userData } = useUserData();
    const notVerified = userData?.user?.emailVerified === null || userData?.user?.emailVerified === undefined
    const userId = userData?.user.id
    const { data: roleData, loading: loadingRole } = useIsAdminUser(userId)
    const isAdmin = roleData?.isUserAdmin
    const { data: profileData, loading: loadingPerfil, error } = useQuery<{ profile: Profile }>(
        GET_PROFILE,
        {
            variables: { userId },
            fetchPolicy: 'no-cache',
        }
    )
    useEffect(() => {
        if (status === "authenticated") {
            if (!loadingUser && notVerified) {
                router.push('/verifyEmail')
            }
        }
        if (!loadingPerfil) {
            if (profileData?.profile === null) {
                router.push('/crearPerfil');
            }
        }
    }, [loadingPerfil, status, profileData, loadingUser, notVerified])

    if (loadingUser || loadingRole ||
        loadingRole || status === "loading")
        return (<Loading />)
    if (!session) {
        signIn('google', { callbackUrl: '/home' });
    } else {
        if (isAdminPage && !isAdmin) {
            router.push('/home');
        }
        return (
            <div className="flex flex-col">
                <Navbar
                    session={session}
                    userId={userId}
                    isUserAdmin={isAdmin}
                />
                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default PrivateLayout