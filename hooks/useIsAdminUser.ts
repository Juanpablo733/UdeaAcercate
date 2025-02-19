import { IS_USER_ADMIN } from "@/graphql/client/role"
import { Role } from "@/prisma/generated/type-graphql"
import { useQuery } from "@apollo/client"

interface IsAdminType{
    isUserAdmin: boolean
}

export const useIsAdminUser = (userId: string) => {
    const { data, loading, error } = useQuery<IsAdminType>(IS_USER_ADMIN,
        {
            variables: { userId },
            fetchPolicy: "network-only"
        }
    )
    return {
        data,
        loading,
        error
    }
}
