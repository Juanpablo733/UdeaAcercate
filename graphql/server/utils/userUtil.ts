import { PrismaClient } from "@prisma/client";

export async function findUser(db: PrismaClient, userId: string){
    return await db.user.findUnique({
        where: {
            id: userId
        }
    })
}