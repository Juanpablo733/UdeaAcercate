import { PrismaClient } from "@prisma/client";

export const findHashtags = (text: String) => {
    const regex: RegExp = /#(\w+)/g;
    const hashtags = text.match(regex);
    if (hashtags === null) {
        return new Array<string>();
    }
    return hashtags;
}

export async function isAdmin(db: PrismaClient, authorId: String): Promise<Boolean> {
    const role = await db.role.findUnique({
        where: {
            userId: authorId
        }
    })
    if (!role)
        return false
    if (role.role != "Admin")
        return false
    return true
}