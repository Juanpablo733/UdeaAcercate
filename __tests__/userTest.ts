import gql from "graphql-tag"
import { server } from "../lib/apolloServer"
import { GET_USER_BY_EMAIL } from "../graphql/client/user"
import { typeDefs } from "@/graphql/server/types"
import { resolvers } from "@/graphql/server/resolvers"
import { ApolloServer } from "@apollo/server"

const testServer = new ApolloServer({
    typeDefs,
    resolvers
})


it("Get user by email ending with @udea.edu.co", async () => {
    const email = 'prueba@udea.edu.co'
    const result = await testServer.executeOperation({
        query: GET_USER_BY_EMAIL,
        variables: { email }
    });
    console.log(result)
    expect(result).toBeTruthy()
    expect(result).toHaveProperty("data");
    // expect(result.errors).toBeFalsy();    
    expect(result.data?.user).toHaveProperty("id");
    expect(result.data?.user).toHaveProperty("name");
    expect(result.data?.user).toHaveProperty("emailVerified");
    expect(result.data?.user).toHaveProperty("image");
})