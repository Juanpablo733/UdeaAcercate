
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USER_LIST_BY_EMAIL } from '@/graphql/client/role';
import { Loading } from '../ui/Loading';
import { RoleRow } from './rows/RoleRow';
import { useUserData } from '@/hooks/useUserData';
import { ReportDetailRow } from './rows/ReportDetailRow';
import { GET_EVENT_REPORTS } from '@/graphql/client/report';

export const ReportDetailTable = ({ eventId }: { eventId: string }) => {
    const { userData, loading: loadingUser } = useUserData()
    const { data, loading, error } = useQuery(GET_EVENT_REPORTS,
        { variables: { eventId } }
    )
    if (loadingUser || loading)
        return <Loading />
    if (error)
        console.log(error)
    console.log(data)
    return (
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Usuario
                                    </th>

                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Razón
                                    </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Fecha | Hora
                                    </th>
                                </tr>
                            </thead>
                            {
                                loading ? <Loading /> :
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {data?.getEventReports?.map(report =>
                                            <ReportDetailRow
                                                key={report.userId}
                                                userId={report.userId}
                                                reason={report.reason}
                                                date={report.dateTime}
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