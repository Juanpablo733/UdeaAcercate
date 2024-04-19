import { PrismaClient } from "@prisma/client";

export async function deleteAllCommentsFromEvent(db: PrismaClient, eventId: string) {
    const event = await db.event.findUnique({
        where: {
            id: eventId
        }
    })    
    await db.comment.deleteMany({
        where: {
            infoId: event.infoId
        }
    });
}