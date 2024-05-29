import { Resolver } from "@/types";
import { findUser } from "../utils/userUtil";
import { deleteEvent, findEvent } from "../utils/eventUtil";
import { deleteAllAttendeesFromEvent } from "../utils/attendeeUtil";
import { deleteAllCommentsFromEvent } from "../utils/commentUtil";

const findHashtags = (text: String) => {
    const regex: RegExp = /#(\w+)/g;
    const hashtags = text.match(regex);
    if (hashtags === null) {
        return new Array();
    }
    return hashtags;
}

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
                    // NOT: {
                    //     authorId: args.sessionUserId
                    // },
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
    },
    Mutation: {
        createEvent: async (parent, args, context) => {
            const { db } = context;
            const { title, description, place, date, image, tag, authorId } = args;
            const hashtags: string[] = findHashtags(description) as string[];
            const newDate = new Date(date);
            console.log(newDate.toString())
            const newInfo = await db.information.create({
                data: {
                    title: title,
                    description: description,
                    date: newDate,
                    tag: tag,
                    image: image,
                    hashtags: hashtags,
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
                await deleteAllAttendeesFromEvent(db, args.eventId);
                await deleteAllCommentsFromEvent(db, args.eventId);
                if (eventToDelete !== null) {
                    await deleteEvent(db, args.eventId);
                    deleted = true
                }
            }
            return deleted
        },
    }
}

export { eventResolvers }
