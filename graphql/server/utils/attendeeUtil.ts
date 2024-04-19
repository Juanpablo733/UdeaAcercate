import { PrismaClient } from "@prisma/client";

export async function deleteAllAttendeesFromEvent(db: PrismaClient, eventId: string) {
    await db.attendee.deleteMany({
        where: {
            eventId: eventId
        }
    });
}