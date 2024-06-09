import { Resolver } from "@/types";
import { createAdminRole, isAdminUser } from "../utils/roleUtil";
const roleResolvers: Resolver = {
    Query: {
        isUserAdmin: async (parent, args, context) => {
            return await isAdminUser(context.db, args.userId)            
        },
        getUsersByMail: async (parent, args, context) => {
            const { db } = context;
            const user = await db.user.findMany({
                where: {
                    email: {
                        contains: args.email
                    }
                }
            });
            return user;
        }
    },
    Mutation: {
        grantAdminToUser: async (parent, args, context) => {
            const { db } = context
            const isAdmin = await isAdminUser(db, args.adminUserId)
            if (!isAdmin) return false

            const user = await db.user.findUnique({ where: { id: args.userId } })
            if (user === null) return false

            return await createAdminRole(db, args.userId)
        }
    }
}

export { roleResolvers }