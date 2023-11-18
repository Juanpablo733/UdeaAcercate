import { GET_PROFILE } from "@/graphql/client/profile";
import { server } from "../../lib/apolloServer"

it("Get profile of a user using their id", async () => {
    var userId = "giusgio5253ywshji65e4yui"
    var result = await server.executeOperation({
        query: GET_PROFILE,
        variables: { userId }
    });
    expect(result).toBeTruthy()
    expect(result.errors).toBeFalsy();    
    expect(result).toHaveProperty("data");
    expect(result.data).toBeTruthy()
    expect(result.data).toHaveProperty("profile")
    expect(result.data?.profile).toHaveProperty("faculty");
    expect(result.data?.profile).toHaveProperty("career");
    expect(result.data?.profile).toHaveProperty("type");
    expect(result.data?.profile).toHaveProperty("campus");
    expect(result.data?.profile).toHaveProperty("user");
    expect(result.data?.profile.user).toBeTruthy()
    expect(result.data?.profile).toHaveProperty("description");
    expect(result.data?.profile).toHaveProperty("hobbies");
    expect(result.data?.profile).toHaveProperty("socialLinks");
})