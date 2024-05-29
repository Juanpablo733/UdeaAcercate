import { Resolver } from "@/types";
import { findUser } from "../utils/userUtil";
import { resolveEvent } from "../utils/commentUtil";

const commentResolvers: Resolver = {
    Query: {
        allComments: async (parent, args, context) => {
            const { db } = context;
            let comments
            if (args.startDate && args.endDate) {
                comments = await db.comment.findMany({
                    where: {
                        dateTime: {
                            gte: new Date(args.startDate),
                            lte: new Date(args.endDate),
                        }
                    }
                })
            }
            else comments = await db.comment.findMany()
            console.log(comments)
            const commentsStringArray = new Array<string>()
            comments.forEach(element => {
                commentsStringArray.push(element.text)
            })
            return commentsStringArray
        },
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            const { db } = context;
            const { name, email, image, emailVerified } = args;

            const newUser = await db.user.create({
                data: {
                    email,
                    name,
                    image,
                    emailVerified
                },
            });

            return newUser;
        },
        createComment: async (parent, args, context) => {
            const { db } = context;
            const event = await db.event.findUnique({
                where: {
                    id: args.eventId
                }
            })
            return await db.comment.create({
                data: {
                    userId: args.userId,
                    infoId: event.infoId,
                    text: args.text,
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        deleteCommentByOwner: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = false;
            const commentToDelete = await db.comment.findUnique({
                where: {
                    id: args.commentId
                }
            })
            if (commentToDelete) {
                if (commentToDelete.userId == args.ownerId) {
                    await db.comment.delete({
                        where: {
                            id: args.commentId,
                        }
                    }).then(() => deleted = true)
                }
            }
            return deleted;
        },
    },
    Comment: {
        user: async (parent, args, context) => {
            return findUser(context.db, parent.userId);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
}

export { commentResolvers }