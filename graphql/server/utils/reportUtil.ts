import { PrismaClient } from "@prisma/client"

export async function getReportedEvents(db: PrismaClient){
    const allReportCount = await getAllReportCount(db)
    const eventIds = allReportCount.map(report => report.eventId)
    const eventsInfo = await getEventsInfo(db, eventIds)
    console.log(eventsInfo)
    const reportedEvents = fillReportedEventsArray(eventIds, eventsInfo, allReportCount)
    return reportedEvents
}

async function getAllReportCount(db: PrismaClient) {
    return await db.report.groupBy({
        by: ["eventId"],
        _count: true
    })
}
async function getEventsInfo(db: PrismaClient, eventIds: String[]) {
    return await db.event.findMany({
        where: {
            id: {
                in: eventIds
            },
        },
        include: {
            author: {
                select: {
                    name: true
                }
            },
            info: {
                select: {
                    title: true
                }
            }
        }
    })
}

function fillReportedEventsArray(eventIds: any, eventsInfo: any, allReportCount: any) {
    return eventIds.map(eventId => {
        const event = eventsInfo.find(event => event.id === eventId)
        const reportCount = allReportCount.find(reportCount => reportCount.eventId === eventId)
        return {
            eventId: eventId,
            eventTitle: event.info.title,
            authorId: event.authorId,
            authorName: event.author.name,
            reportCount: reportCount._count
        }
    })
}




