import { ApolloServer } from "apollo-server-micro"
import { resolvers } from '../graphql/server/resolvers';
import { typeDefs } from '../graphql/server/types';

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export { server };