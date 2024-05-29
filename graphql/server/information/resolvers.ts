import { Resolver } from "@/types";
import { findHashtags, isAdmin } from "../utils/infoUtil";

const informationResolvers: Resolver = {
    Query: {},
    Mutation: {
        createInfo: async (parent, args, context) => {
            const { db } = context;
            const authorId = args.authorId
            const isAdminUser = await isAdmin(db, authorId)
            if (!isAdminUser) {
                console.log("No tienes permisos para crear noticias")
                return null
            }
            const { title, description, place, date, image, tag } = args;
            const hashtags: string[] = findHashtags(description);
            const newDate = new Date(date);
            const newInfo = await db.information.create({
                data: {
                    title: title,
                    description: description,
                    date: newDate,
                    tag: tag,
                    image: image,
                    hashtags: hashtags,
                    authorId: authorId
                }
            })
            return newInfo;
        },
    },
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