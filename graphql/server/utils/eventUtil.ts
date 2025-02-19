import { PrismaClient } from "@prisma/client";
import { deleteAllAttendeesFromEvent } from "./attendeeUtil";
import { deleteAllCommentsFromEvent } from "./commentUtil";
import { Event } from "@/prisma/generated/type-graphql";
import { deleteInfo } from "./infoUtil";

export async function deleteEventAndRelations(db: PrismaClient, eventId: string) {
    await deleteAllAttendeesFromEvent(db, eventId);
    await deleteAllCommentsFromEvent(db, eventId);
    const eventToDelete = await findEvent(db, eventId)
    if (eventToDelete !== null) {
        await deleteEvent(db, eventId);
        await deleteInfo(db, eventToDelete.infoId)
    }
    await db.report.deleteMany({
        where:{
            eventId: eventId
        }
    })
}

export async function deleteEvent(db: PrismaClient, eventId: string) {
    await db.event.delete({
        where: {
            id: eventId
        }
    });
}

export async function findEvent(db: PrismaClient, eventId: string): Promise<Event> {
    return await db.event.findUnique({
        where: {
            id: eventId
        }
    });
}