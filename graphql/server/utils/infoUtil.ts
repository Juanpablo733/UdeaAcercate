import { PrismaClient } from "@prisma/client";

export const findHashtags = (text: String) => {
    const regex: RegExp = /#(\w+)/g;
    const hashtags = text.match(regex);
    if (hashtags === null) {
        return new Array<string>();
    }
    return hashtags;
}

export async function deleteInfo(db: PrismaClient, infoId: string){
    return await db.information.delete({
        where:{
            id: infoId
        }
    })
}