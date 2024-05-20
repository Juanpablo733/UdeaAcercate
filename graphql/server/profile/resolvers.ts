import { Resolver } from "@/types";
import { cloneDeep } from "@apollo/client/utilities";
import { findUser } from "../utils/userUtil";

const profileResolvers: Resolver = {
    Profile: {
        user: async (parent, args, context) => {
            return findUser(context.db, parent.userId);
        },
    },
    Query: {
        profile: async (parent, args, context) => {
            const { db } = context;
            return await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            })
        },
    },
    Mutation: {
        createProfile: async (parent, args, context) => {
            const { db } = context;
            const findProfile = await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            });
            if (findProfile != null) return findProfile;
            const newProfile = await db.profile.create({
                data: args

            }).catch((error) => { return null });
            return newProfile;
        },
        updateProfile: async (parent, args, context) => {
            const { db } = context;
            const newData = cloneDeep(args);
            delete newData.userId;
            return await db.profile.update({
                where: {
                    userId: args.userId
                },
                data: newData,
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
    }
}

export { profileResolvers }