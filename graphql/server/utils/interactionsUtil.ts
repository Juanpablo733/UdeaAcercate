import { PrismaClient } from "@prisma/client";

export async function getInteractionsByEventTags(db: PrismaClient, startDate: Date, endDate: Date) {
    //Add 1 day to the end date, so it includes data from that end day
    const endDateMilliseconds: number = endDate.getTime() + (24 * 3600 * 1000)
    const realEndDate = new Date(endDateMilliseconds)
    const comments = await getCommentsCountByTag(db, startDate, realEndDate)
    const attendees = await getAttendeesCountByTag(db, startDate, realEndDate)
    return getInteractionsJSON(attendees, comments);
}

async function getCommentsCountByTag(db: PrismaClient, startDate: Date, endDate: Date) {
    const comments = await getCommentsInDateRange(db, startDate, endDate)
    const commentsCountByTag = countCommentsByTag(comments);
    return commentsCountByTag
}

async function getCommentsInDateRange(db: any, startDate: Date, endDate: Date) {
    return await db.comment.findMany({
        where: {
            dateTime: {
                gte: startDate,
                lte: endDate,
            }
        },
        include: {
            info: {
                select: {
                    tag: true
                }
            }
        }
    });
}

function countCommentsByTag(comments: any) {
    const commentsCountByTag = comments.reduce((count, comment) => {
        const tag = comment.info.tag;
        if (count[tag])
            count[tag]++;

        else
            count[tag] = 1;
        return count;
    }, {});
    return commentsCountByTag;
}

async function getAttendeesCountByTag(db: any, startDate: Date, endDate: Date) {
    const attendees = await getAttendeesInDateRange(db, startDate, endDate);
    const attendeesCountByTag = countAttendeesByTag(attendees)
    return attendeesCountByTag
}

async function getAttendeesInDateRange(db: any, startDate: Date, endDate: Date) {
    const attendees = await db.attendee.findMany({
        where: {
            dateTime: {
                gte: startDate,
                lte: endDate,
            }
        },
        include: {
            event: {
                include: {
                    info: {
                        select: {
                            tag: true
                        }
                    }
                }
            }
        }
    });
    return attendees;
}

function countAttendeesByTag(attendees: any) {
    const attendeesCountByTag = attendees.reduce((count, attendee) => {
        const tag = attendee.event.info.tag;
        if (count[tag])
            count[tag]++;

        else
            count[tag] = 1;
        return count;
    }, {});
    return attendeesCountByTag;
}

function getInteractionsJSON(attendees: any, comments: any) {
    const interactions = {
        academico: {
            attendees: attendees['Academico'] ?? 0,
            comments: comments['Academico'] ?? 0
        },
        cultural: {
            attendees: attendees['Cultural'] ?? 0,
            comments: comments['Cultural'] ?? 0
        },
        deportivo: {
            attendees: attendees['Deportivo'] ?? 0,
            comments: comments['Deportivo'] ?? 0
        }
    };
    return interactions;
}