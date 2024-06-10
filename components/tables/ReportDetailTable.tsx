
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER_LIST_BY_EMAIL } from '@/graphql/client/role';
import { Loading } from '../ui/Loading';
import { RoleRow } from './rows/RoleRow';
import { useUserData } from '@/hooks/useUserData';
import { ReportDetailRow } from './rows/ReportDetailRow';

export const ReportDetailTable = ({ searchEmail }: { searchEmail: string }) => {
    const { userData, loading: loadingUser } = useUserData()
    const { data, loading, error } = useQuery(GET_USER_LIST_BY_EMAIL,
        { variables: { email: searchEmail } }
    )
    if(loadingUser || loading)
        return <Loading/>
    if (error)
        console.log(error)
    return (
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Correo
                                    </th>

                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Nombre
                                    </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Rol
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Acción
                                    </th>
                                </tr>
                            </thead>
                            {
                                loading ? <Loading /> :
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {data?.getUsersByMail?.map(user =>
                                            <ReportDetailRow
                                                key={user.id}
                                                userId={user.id}
                                                adminId={userData?.user.id}
                                                email={user.email}
                                                name={user.name}
                                            />
                                        )}
                                    </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}