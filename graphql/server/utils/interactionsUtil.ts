import { PrismaClient } from "@prisma/client";
import { Event } from "@/prisma/generated/type-graphql"

export async function getInteractionsByEventTags(db: PrismaClient) {
    const interactions = {
        academico: {
            attendees: await getAttendeesByEventTag(db, 'Academico'),
            comments: await getCommentsByEventTag(db, 'Academico')
        },
        cultural: {
            attendees: await getAttendeesByEventTag(db, 'Cultural'),
            comments: await getCommentsByEventTag(db, 'Cultural')
        },
        deportivo: {
            attendees: await getAttendeesByEventTag(db, 'Deportivo'),
            comments: await getCommentsByEventTag(db, 'Deportivo')
        }
    }
    console.log("Interactions: ", interactions)
    return interactions
}

async function getAttendeesByEventTag(db: PrismaClient, eventTag: string) {
    const events = await getEventsByTag(db, eventTag)
    return countAttendees(db, events);
}

async function getCommentsByEventTag(db: PrismaClient, eventTag: string) {
    const events = await getEventsByTag(db, eventTag)
    return countComments(db, events);
}

async function getEventsByTag(db: PrismaClient, tag: string) {
    return await db.event.findMany({
        where: {
            info: {
                tag: tag
            }
        }
    });
}

async function countAttendees(db: PrismaClient, events: Event[]) {
    let attendeesNumber = 0;
    for (const e of events) {
        const atts = await db.attendee.count({
            where: {
                eventId: e.id
            }
        });
        attendeesNumber += atts;
        console.log("[Interactions] attendees:", attendeesNumber);
    }
    return attendeesNumber;
}

async function countComments(db: PrismaClient, events: Event[]) {
    let commentsNumber = 0;
    for (const e of events) {
        const comments = await db.comment.count({
            where: {
                infoId: e.infoId
            }
        });
        commentsNumber += comments;
        console.log("[Interactions] comments:", commentsNumber);
    }
    return commentsNumber
}

