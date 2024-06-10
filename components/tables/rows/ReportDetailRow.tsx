import { GRANT_ADMIN_TO_USER, IS_USER_ADMIN } from '@/graphql/client/role'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

interface RoleRowProps {
    userId: string,
    adminId: string,
    name: string,
    email: string
}

export const ReportDetailRow = ({ userId, adminId, email, name }: RoleRowProps) => {
    const { data, loading, error } = useQuery(IS_USER_ADMIN,
        { variables: { userId } }
    )
    const [grantAdmin] = useMutation(GRANT_ADMIN_TO_USER)
    const isAdmin = data?.isUserAdmin
    const roleCell = isAdmin ? "Admin" : "User"

    const executeGrantAdmin = async () => {
        try {
            await grantAdmin({
                variables: {
                    userId,
                    adminUserId: adminId
                },
                refetchQueries: [IS_USER_ADMIN]
            })
            toast.success("Se ha otorgado el rol de administrador al usuario " + name);
        }
        catch (error) {
            toast.error('No se ha otorgado el rol de administrador');
        }
    }

    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <Link href={`/perfil/${userId}`}>
                    <h2 className="font-medium text-gray-800 dark:text-white ">
                        {email}
                    </h2>
                </Link>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <Link href={`/perfil/${userId}`}>
                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        {name}
                    </div>
                </Link>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">
                        {loading ? "Cargando" : roleCell}
                    </h4>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                {(loading || isAdmin)? <></>
                    :
                    <div className="flex items-center justify-center">
                        <button
                            className='ButtonCard disabled:bg-slate-400'
                            onClick={executeGrantAdmin}
                        >
                            Hacer administrador
                        </button>
                    </div>
                }
            </td>
        </tr>
    )
}