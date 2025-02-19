import { Resolver } from "@/types";
import { findUser } from "../utils/userUtil";
import { resolveEvent } from "../utils/commentUtil";

const attendeeResolvers: Resolver = {
    Query: {
        attendee: async (parent, args, context) => {
            const { db } = context;
            const userId = args.userId;
            const eventId = args.eventId;

            const attendee = await db.attendee.findUnique({
                where: {
                    userId_eventId: { userId, eventId }
                }
            }).catch((e) => { console.log(e) })
            if (attendee) return true
            return false
        },
    },
    Mutation: {
        addAttendee: async (parent, args, context) => {
            const { db } = context;
            return await db.attendee.create({
                data: {
                    userId: args.userId,
                    eventId: args.eventId
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        quitAttendee: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = true;
            const userId = args.userId
            const eventId = args.eventId
            await db.attendee.delete({
                where: {
                    userId_eventId: { userId, eventId }
                }
            }).catch((e) => {
                console.log(e)
                deleted = false;
            });
            return deleted;
        },
    },
    Attendee: {
        user: async (parent, args, context) => {
            return findUser(context.db, parent.userId);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
}

export { attendeeResolvers }