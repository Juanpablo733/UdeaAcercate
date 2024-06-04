import { Resolver } from "@/types";
import { createAdminRole, getRole } from "../utils/roleUtil";
const roleResolvers: Resolver = {
    Query: {
        isUserAdmin: async (parent, args, context) => {
            const userRole = await getRole(context.db, args.userId)
            console.log(userRole)
            if (userRole?.role === "Admin") return true
            else return false
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
            const adminUserRole = await getRole(db, args.adminUserId)
            if (adminUserRole === null)
                return false
            if (adminUserRole.role !== "Admin") return false

            const user = await db.user.findUnique({ where: { id: args.userId } })
            if (user === null) return false

            return await createAdminRole(db, args.userId)
        }
    }
}

export { roleResolvers }