import { ApolloServer } from "apollo-server-micro"
import { resolvers } from '../graphql/server/resolvers';
import { typeDefs } from '../graphql/server/types';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db: prisma }),
});

export { server };