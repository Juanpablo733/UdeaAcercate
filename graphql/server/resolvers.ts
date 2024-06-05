import { Resolver } from "@/types";
import { sendVerificationEmail } from "../../util/nodemailerConfig";
import { getInteractionsByEventTags } from "./utils/interactionsUtil";
import { eventResolvers } from "./event/resolvers";
import { profileResolvers } from "./profile/resolvers";
import { informationResolvers } from "./information/resolvers";
import { commentResolvers } from "./comment/resolvers";
import { attendeeResolvers } from "./attendee/resolvers";
import { sentimentResolvers } from "./sentiment/resolvers";
import { reportResolvers } from "./report/resolvers";
import { roleResolvers } from "./role/resolvers";

const resolvers: Resolver = {
    Query: {
        test: async (parent, args, context) => {
            return args.bool;
        },
        users: async (parent, args, context) => {
            const { db } = context;
            const users = await db.user.findMany();
            return users;
        },
        user: async (parent, args, context) => {
            const { db } = context;
            const user = await db.user.findUnique({
                where: {
                    email: args.email
                }
            });
            return user;
        },
        interactionsPerEventType: async (parent, args, context) => {
            const { db } = context;
            return await getInteractionsByEventTags(db, new Date(args.startDate), new Date(args.endDate))
        },
    },
    Mutation: {
        generateEmailToken: async (parent, args, context) => {
            const { db } = context;
            const token = Math.trunc(Math.random() * Math.pow(10, 6))
            const expireDate = new Date(Date.now() + 120000)
            const user = await db.user.findUnique({
                where: {
                    id: args.userId
                },
                select: {
                    email: true
                }
            })

            console.log(user)
            await sendVerificationEmail(user?.email ?? '', token.toString())

            const savedToken = await db.emailToken.findUnique({
                where: {
                    identifier: args.userId
                }
            })

            if (savedToken) {
                return await db.emailToken.update({
                    where: {
                        identifier: args.userId
                    },
                    data: {
                        token: token.toString(),
                        expires: expireDate
                    }
                })
            }
            return await db.emailToken.create({
                data: {
                    identifier: args.userId,
                    token: token.toString(),
                    expires: expireDate
                }
            }
            )
        },
        verifyEmailToken: async (parent, args, context) => {
            const { db } = context;
            const savedToken = await db.emailToken.findUnique({
                where: {
                    identifier: args.identifier
                }
            })
            if (args.token === savedToken?.token && Date.now() <= Number(savedToken?.expires)) {
                await db.emailToken.delete({
                    where: {
                        identifier: args.identifier
                    }
                })
                await db.user.update({
                    where: {
                        id: args.identifier
                    },
                    data: {
                        emailVerified: new Date(Date.now())
                    }
                }
                )
                return true
            }
            return false
        },
    }
};

const customResolvers = [
    resolvers,
    profileResolvers,
    informationResolvers,
    eventResolvers,
    commentResolvers,
    attendeeResolvers,
    sentimentResolvers,
    reportResolvers,
    roleResolvers
]

export { customResolvers }