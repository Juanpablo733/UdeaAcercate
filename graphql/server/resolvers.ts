import { Resolver, Context } from "@/types";
import { sendVerificationEmail } from "../../util/nodemailerConfig";
import { cloneDeep } from "@apollo/client/utilities";

const resolveUser = async (userId: string, context: Context) => {
    const { db } = context;
    const user = db.user.findUnique({
        where: {
            id: userId
        }
    })
    return user;
}

const resolveEvent = async (eventId: string, context: Context) => {
    const { db } = context;
    const event = db.event.findUnique({
        where: {
            id: eventId
        }
    })
    return event;
}

const findHashtags = (text: String) => {
    const regex: RegExp = /#(\w+)/g;
    const hashtags = text.match(regex);
    if (hashtags === null) {
        return new Array();
    }
    return hashtags;
}

const resolvers: Resolver = {
    Event: {
        comments: async (parent, args, context) => {
            const { db } = context;
            const comments = await db.comment.findMany({
                where: {
                    eventId: parent.id
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
            return comments;
        },
        author: async (parent, args, context) => {
            return resolveUser(parent.authorId, context);
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
        minutes: async (parent) => {
            const date = new Date(parent.date)
            return date.getMinutes()
        },
        hours: async (parent) => {
            const date = new Date(parent.date)
            return date.getHours()
        },
        day: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCDay()
        },
        month: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCMonth() + 1
        },
        year: async (parent) => {
            const date = new Date(parent.date)
            return date.getUTCFullYear()
        },
    },
    Comment: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
    Profile: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
    },
    Attendee: {
        user: async (parent, args, context) => {
            return resolveUser(parent.userId, context);
        },
        event: async (parent, args, context) => {
            return resolveEvent(parent.eventId, context);
        },
    },
    Query: {
        test: async (parent, args, context) => {
            return args.bool;
        },
        users: async (parent, args, context) => {
            const { db } = context;
            const users = await db.user.findMany();
            return users;
        },
        user: async (parent, args, context) => {
            const { db } = context;
            const user = await db.user.findUnique({
                where: {
                    email: args.email
                }
            });
            return user;
        },
        events: async (parent, args, context) => {
            const { db } = context;

            const filter = args.hashtags
            const options = {
                where: {
                    NOT: {
                        authorId: args.sessionUserId
                    },
                    tag: args.tag,
                    hashtags: filter
                }
            }
            if (args.tag === undefined || args.tag === "") {
                delete options["where"]["tag"]
            }
            if (filter === undefined || filter === "") {
                delete options["where"]["hashtags"]
            } else {
                options["where"]["hashtags"] = {
                    hasEvery: filter,
                }
            }
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
            return await db.event.findUnique({
                where: {
                    id: args.id
                }
            });
        },
        profile: async (parent, args, context) => {
            const { db } = context;
            return await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            })
        },
        attendee: async (parent, args, context) => {
            const { db } = context;
            const userId = args.userId;
            const eventId = args.eventId;

            const attendee = await db.attendee.findUnique({
                where: {
                    userId_eventId: { userId, eventId }
                }
            }).catch((e) => { console.log(e) })
            if (attendee) return true
            return false
        }
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            const { db } = context;
            const { name, email, image, emailVerified } = args;

            const newUser = await db.user.create({
                data: {
                    email,
                    name,
                    image,
                    emailVerified
                },
            });

            return newUser;
        },
        createEvent: async (parent, args, context) => {
            const { db } = context;
            const { title, description, place, date, image, tag, authorId } = args;
            const hashtags: string[] = findHashtags(description) as string[];
            const newDate = new Date(date);
            console.log(newDate.toString())
            const newEvent = await db.event.create({
                data: {
                    title: title,
                    description: description,
                    place: place,
                    date: newDate,
                    image: image,
                    tag: tag,
                    hashtags: hashtags,
                    author: {
                        connect: {
                            id: authorId
                        }
                    }
                },
            });
            console.log("Nuevo evento: ", newEvent)
            return newEvent;
        },
        createProfile: async (parent, args, context) => {
            const { db } = context;
            const findProfile = await db.profile.findUnique({
                where: {
                    userId: args.userId
                }
            });
            if (findProfile != null) return findProfile;
            const newProfile = await db.profile.create({
                data: args

            }).catch((error) => { return null });
            return newProfile;
        },
        updateProfile: async (parent, args, context) => {
            const { db } = context;
            const newData = cloneDeep(args);
            delete newData.userId;
            return await db.profile.update({
                where: {
                    userId: args.userId
                },
                data: newData,
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        createComment: async (parent, args, context) => {
            const { db } = context;
            return await db.comment.create({
                data: {
                    userId: args.userId,
                    eventId: args.eventId,
                    text: args.text,
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        deleteCommentByOwner: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = false;
            const commentToDelete = await db.comment.findUnique({
                where: {
                    id: args.commentId
                }
            })
            if (commentToDelete) {
                if (commentToDelete.userId == args.userId) {
                    await db.comment.delete({
                        where: {
                            id: args.commentId,
                        }
                    }).then(() => deleted = true)
                }
            }
            return deleted;
        },
        addAttendee: async (parent, args, context) => {
            const { db } = context;
            return await db.attendee.create({
                data: {
                    userId: args.userId,
                    eventId: args.eventId
                }
            }).catch((e) => {
                console.log(e)
                return null
            });
        },
        quitAttendee: async (parent, args, context) => {
            const { db } = context;
            var deleted: Boolean = true;
            const userId = args.userId
            const eventId = args.eventId
            await db.attendee.delete({
                where: {
                    userId_eventId: { userId, eventId }
                }
            }).catch((e) => {
                console.log(e)
                deleted = false;
            });
            return deleted;
        },
        generateEmailToken: async (parent, args, context) => {
            const { db } = context;
            const token = Math.trunc(Math.random() * Math.pow(10, 6))
            const expireDate = new Date(Date.now() + 120000)
            const user = await db.user.findUnique({
                where: {
                    id: args.userId
                },
                select: {
                    email: true
                }
            })

            console.log(user)
            await sendVerificationEmail(user?.email ?? '', token.toString())

            const savedToken = await db.emailToken.findUnique({
                where: {
                    identifier: args.userId
                }
            })

            if (savedToken) {
                return await db.emailToken.update({
                    where: {
                        identifier: args.userId
                    },
                    data: {
                        token: token.toString(),
                        expires: expireDate
                    }
                })
            }
            return await db.emailToken.create({
                data: {
                    identifier: args.userId,
                    token: token.toString(),
                    expires: expireDate
                }
            }
            )
        },
        verifyEmailToken: async (parent, args, context) => {
            const { db } = context;
            const savedToken = await db.emailToken.findUnique({
                where: {
                    identifier: args.identifier
                }
            })
            if (args.token === savedToken?.token && Date.now() <= Number(savedToken?.expires)) {
                await db.emailToken.delete({
                    where: {
                        identifier: args.identifier
                    }
                })
                await db.user.update({
                    where: {
                        id: args.identifier
                    },
                    data: {
                        emailVerified: new Date(Date.now())
                    }
                }
                )
                return true
            }
            return false
        },
    }
};

export { resolvers }