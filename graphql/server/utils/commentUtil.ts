import { PrismaClient } from "@prisma/client";

export async function deleteAllCommentsFromEvent(db: PrismaClient, eventId: string) {
    await db.comment.deleteMany({
        where: {
            eventId: eventId
        }
    });
}