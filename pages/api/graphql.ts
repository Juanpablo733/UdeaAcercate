import { customResolvers } from '@/graphql/server/resolvers';
import { customTypeDefs } from '@/graphql/server/types';
import { Context } from '@/types';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import prisma from '@/config/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const server = new ApolloServer({
    resolvers: customResolvers,
    typeDefs: customTypeDefs,
});

export default startServerAndCreateNextHandler<NextApiRequest, Context>(
    server, {
    context: async (req: NextApiRequest, res: NextApiResponse) => ({
        req,
        res,
        db: prisma
    })
});