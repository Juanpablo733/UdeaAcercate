import gql from "graphql-tag"
import { server } from "../lib/apolloServer"
import { GET_USER_BY_EMAIL } from "../graphql/client/user"

it("Get user by email ending with @udea.edu.co", async () => {
    var testEmail = "prueba@udea.edu.co"
    var result = await server.executeOperation({
        query: GET_USER_BY_EMAIL,
        variables: { email: testEmail }
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