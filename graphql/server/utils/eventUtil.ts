import { PrismaClient } from "@prisma/client";



export async function deleteEvent(db: PrismaClient, eventId: string) {
    await db.event.delete({
        where: {
            id: eventId
        }
    });
}

export async function findEvent(db: PrismaClient, eventId: string) {
    return await db.event.findUnique({
        where: {
            id: eventId
        }
    });
}