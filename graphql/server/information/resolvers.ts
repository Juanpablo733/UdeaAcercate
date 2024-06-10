import { Resolver } from "@/types";
import { findHashtags } from "../utils/infoUtil";
import { isAdminUser } from "../utils/roleUtil";
import InfoProfile from '../../../components/profile/InfoProfile';

const informationResolvers: Resolver = {
    Query: {
        notices: async (parent, args, context) => {
            return await context.db.information.findMany({
                where: {
                    event: null
                }
            })
        },
        noticeById: async (parent, args, context) => {
            return await context.db.information.findUnique({
                where: {
                    id: args.infoId
                }
            })
        }
    },
    Mutation: {
        createInfo: async (parent, args, context) => {
            const { db } = context;
            const authorId = args.authorId
            const isAdmin = await isAdminUser(db, authorId)
            if (!isAdmin) {
                console.log("No tienes permisos para crear noticias")
                return null
            }
            const { title, description, image, } = args;
            const hashtags: string[] = findHashtags(description);

            const newInfo = await db.information.create({
                data: {
                    title: title,
                    description: description,
                    image: image,
                    hashtags: hashtags,
                    tag: "Noticia",
                    authorId: authorId,
                    official: true
                }
            })
            return newInfo;
        },
        deleteInformationByOwner: async (parent, args, context) => {

        }
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