import { GRANT_ADMIN_TO_USER, IS_USER_ADMIN } from '@/graphql/client/role'
import { GET_USER_NAME_BY_ID } from '@/graphql/client/user'
import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

interface RoleRowProps {
    userId: string,
    reason: string,
    date: string
}

export const ReportDetailRow = ({ userId, reason, date }: RoleRowProps) => {
    const { data, loading, error } = useQuery(GET_USER_NAME_BY_ID,
        { variables: { userId } }
    )
    const userName = data?.userById.name
    const newDate = new Date(date)
    const day = newDate.getDate().toString().padStart(2, '0')
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
    const year = newDate.getFullYear().toString()
    const hours = newDate.getHours().toString().padStart(2, '0')
    const minutes = newDate.getMinutes().toString().padStart(2, '0')
    console.log(date)

    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap w-20">
                <Link href={`/perfil/${userId}`}>
                    <h2 className="font-medium text-gray-800 dark:text-white ">
                        {userName}
                    </h2>
                </Link>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {reason}
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200">
                        {year} - {month} - {day}
                        {" | " + hours} : {minutes}
                    </h4>
                </div>
            </td>
        </tr>
    )
}