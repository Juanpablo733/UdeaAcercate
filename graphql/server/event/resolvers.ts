import { Resolver } from "@/types";
import { findUser } from "../utils/userUtil";
import { deleteEvent, deleteEventAndRelations, findEvent } from "../utils/eventUtil";
import { deleteAllAttendeesFromEvent } from "../utils/attendeeUtil";
import { deleteAllCommentsFromEvent } from "../utils/commentUtil";
import { findHashtags } from "../utils/infoUtil";
import { isAdminUser } from "../utils/roleUtil";
import { Event } from '../../../prisma/generated/client/index';

const eventResolvers: Resolver = {
    Event: {
        author: async (parent, args, context) => {
            return findUser(context.db, parent.authorId);
        },
        attendeesCount: async (parent, args, context) => {
            const { db } = context;
            const count = db.attendee.count({
                where: {
                    eventId: parent.id
                }
            })
            return count;
        },
        attendees: async (parent, args, context) => {
            const { db } = context;
            return await db.attendee.findMany({
                where: {
                    eventId: parent.id
                },
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        info: async (parent, args, context) => {
            const { db } = context;
            return await db.information.findUnique({
                where: {
                    id: parent.infoId
                }
            })
        }
    },
    Query: {
        events: async (parent, args, context) => {
            const { db } = context;
            console.log("[Events-server] tag:", args.tag)
            const filter = args.hashtags
            console.log("[Events-server] hashtags:", filter)
            const options = {
                where: {
                    NOT: {
                        authorId: args.sessionUserId
                    },
                    info: {
                        tag: args.tag,
                        hashtags: {
                            hasEvery: filter
                        }
                    }
                }
            }
            if (!args.tag) {
                delete options["where"]["info"]["tag"]
            }
            if (!filter) {
                delete options["where"]["info"]["hashtags"]
            }

            console.log("[events] options:", options)
            return await db.event.findMany(options)
                .catch((e) => {
                    console.log(e)
                    return null
                });
        },
        eventsCreated: async (parent, args, context) => {
            const { db } = context;
            return await db.event.findMany({
                where: {
                    authorId: args.userId
                }
            })
        },
        eventsAttending: async (parent, args, context) => {
            const { db } = context;
            return await db.event.findMany({
                where: {
                    attendees: {
                        some: {
                            user: {
                                id: args.userId
                            }
                        }
                    }
                }
            })
        },
        event: async (parent, args, context) => {
            const { db } = context;
            console.log("Resolver event id: ", args.id)
            return await db.event.findUnique({
                where: {
                    id: args.id
                }
            });
        },
        officialEvents: async (parent, args, context) => {
            const { db } = context
            return await db.event.findMany({
                where: {
                    info: {
                        official: true
                    }
                }
            })
        }
    },
    Mutation: {
        createEvent: async (parent, args, context) => {
            const { db } = context;
            const { title, description, place, date, image, tag, authorId } = args;
            const hashtags: string[] = findHashtags(description);
            const newDate = new Date(date);
            console.log(newDate.toString())
            const isAdmin = await isAdminUser(db, authorId)
            const newInfo = await db.information.create({
                data: {
                    title: title,
                    description: description,
                    date: newDate,
                    tag: tag,
                    image: image,
                    hashtags: hashtags,
                    official: isAdmin
                }
            })
            const newEvent = await db.event.create({
                data: {
                    place: place,
                    author: {
                        connect: {
                            id: authorId
                        }
                    },
                    info: {
                        connect: {
                            id: (newInfo.id)
                        }
                    }
                },
            });
            return newEvent;
        },
        deleteEventByOwner: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = false;

            const eventToDelete = await findEvent(db, args.eventId)
            if (eventToDelete.authorId === args.ownerId) {
                await deleteEventAndRelations(db, args.eventId)
                deleted = true
            }
            return deleted
        },
        deleteEventByAdmin: async (parent, args, context) => {
            const { db } = context
            var deleted: Boolean = false;
            const isAdmin = await isAdminUser(db, args.adminId)
            if (isAdmin){
                await deleteEventAndRelations(db, args.eventId)
                deleted = true
            }
            return deleted
        }
    }
}

export { eventResolvers }
