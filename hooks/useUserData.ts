import { GET_USER_BY_EMAIL } from '@/graphql/client/user';
import { User } from '@/prisma/generated/type-graphql';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
const useUserData = () => {
  const { data: session, status } = useSession();

  const userEmail = session?.user?.email;
  console.log("[UserData] Session: ", session)

  const { data: userData, loading } = useQuery<{ user: User }>(
    GET_USER_BY_EMAIL,
    {
      variables: {
        email: userEmail,
      },
      fetchPolicy: 'network-only',
    }
  );

  return {
    loading,
    status,
    session,
    userData
  };
};

export { useUserData };