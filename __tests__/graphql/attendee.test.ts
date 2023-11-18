import { server } from "../../lib/apolloServer"
import { FIND_ATTENDEE } from "@/graphql/client/attendee";

it("Get user by email ending with @udea.edu.co", async () => {
    const userId = "giusgio5253ywshji65e4yui"
    const eventId = "clo8ww9nn0009ub5ggfk9hax3"
    const result = await server.executeOperation({
        query: FIND_ATTENDEE,
        variables: { userId, eventId }
    });
    console.log(result)
    expect(result).toBeTruthy()
    expect(result).toHaveProperty("data")
    expect(result.errors).toBeFalsy()   
    expect(result.data).toHaveProperty("attendee")
    expect(result.data?.attendee).toEqual(true)
})