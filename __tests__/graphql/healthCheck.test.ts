import gql from "graphql-tag"
import { server } from "../../lib/apolloServer"

it("Runs a health against graphql schema", async () => {
    var result = await server.executeOperation({
        query: gql`
            query {
                test(bool: true)
            }
        `,
    })
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
    expect(result.errors).toBeFalsy();
    expect(result.data?.test).toEqual(true);

    result = await server.executeOperation({
        query: gql`
            query {
                test(bool: invalidArgument)
            }
        `,
    })
    expect(result).toBeTruthy();
    expect(result.errors).toBeTruthy();
})