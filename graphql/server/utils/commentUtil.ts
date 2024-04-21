import { PrismaClient } from "@prisma/client";
import prisma from "@/config/prisma"

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

export async function saveCommentSentiment(sentiment: string) {
    console.log(sentiment)
    
    // await prisma.commentSentiment.create()
}