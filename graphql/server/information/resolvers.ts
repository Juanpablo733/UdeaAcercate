import { Resolver } from "@/types";

const informationResolvers: Resolver = {
    Query: {},
    Mutation: {},
    Information: {
        comments: async (parent, args, context) => {
            const { db } = context;
            const comments = await db.comment.findMany({
                where: {
                    infoId: parent.id
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
            return comments;
        },
        minutes: async (parent) => {
            const date = new Date(parent.date)
            return date.getMinutes()
        },
        hours: async (parent) => {
            const date = new Date(parent.date)
            return date.getHours()
        },
        day: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCDay()
        },
        month: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCMonth() + 1
        },
        year: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCFullYear()
        },
    },
}

export { informationResolvers }