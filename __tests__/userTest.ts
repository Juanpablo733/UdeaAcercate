import gql from "graphql-tag"
import { server } from "../lib/apolloServer"
import { GET_EVENTS_PREVIEW } from "@/graphql/client/event"

it("Get all events preview", async () => {
    const result = await server.executeOperation({
        query: GET_EVENTS_PREVIEW
    })
    console.log(result)
    expect(result).toBeTruthy()
    expect(result).toHaveProperty("data");
})