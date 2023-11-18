import { server } from "../../lib/apolloServer"
import { GET_EVENTS_PREVIEW, GET_EVENT_BY_ID } from "@/graphql/client/event"

it("Get all events preview", async () => {
    const result = await server.executeOperation({
        query: GET_EVENTS_PREVIEW
    })
    expect(result).toBeTruthy()
    expect(result).toHaveProperty("data")
    expect(result.data).toBeTruthy()
    expect(result.data).toHaveProperty("events")
    expect(result.errors).toBeFalsy()
})

it("Get missing event data by id", async () => {
    const id = "clo8ww9nn0009ub5ggfk9hax3"
    const result = await server.executeOperation({
        query: GET_EVENT_BY_ID,
        variables: { id }
    })
    console.log(result)     
    expect(result).toBeTruthy()
    expect(result).toHaveProperty("data")
    expect(result.errors).toBeFalsy()
    expect(result.data).toBeTruthy()
    expect(result.data).toHaveProperty("event")
    expect(result.data?.event).toHaveProperty("place")
    expect(result.data?.event.place).toBeTruthy()
    expect(result.data?.event).toHaveProperty("description")
    expect(result.data?.event.description).toBeTruthy()
    expect(result.data?.event).toHaveProperty("hashtags")
    expect(result.data?.event.hashtags).toBeTruthy()
    expect(result.data?.event).toHaveProperty("comments")
})