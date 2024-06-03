import { Resolver } from "@/types";
import { getReportedEvents } from "../utils/reportUtil";

const reportResolvers: Resolver = {
    Query: {
        getReportedEvents: async (parent, args, context) => {
            const { db } = context
            return await getReportedEvents(db)
        },
        getEventReports: async (parent, args, context) => {
            return await context.db.report.findMany({
                where: {
                    eventId: args.eventId
                }
            })
        },
        eventReported: async (parent, args, context) => {
            const { db } = context
            const userId = args.userId;
            const eventId = args.eventId;
            const savedReport = await db.report.findUnique({
                where: {
                    userId: userId,
                    eventId: eventId
                }
            })
            console.log(savedReport)
            if (savedReport != undefined)
                return true
            return false
        }
    },
    Mutation: {
        reportEvent: async (parent, args, context) => {
            const { db } = context
            const userId = args.userId;
            const eventId = args.eventId;
            const savedReport = await db.report.findUnique({
                where: {
                    userId_eventId: { userId, eventId }
                }
            })
            if (savedReport)
                return null
            return await db.report.create({
                data: {
                    eventId: args.eventId,
                    userId: args.userId,
                    reason: args.reason ?? 'No compartida'
                }
            })
        }
    },
}
export { reportResolvers }