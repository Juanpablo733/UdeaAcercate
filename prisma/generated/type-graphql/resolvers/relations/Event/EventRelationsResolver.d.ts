import type { GraphQLResolveInfo } from "graphql";
import { Attendee } from "../../../models/Attendee";
import { Comment } from "../../../models/Comment";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
import { EventAttendeesArgs } from "./args/EventAttendeesArgs";
import { EventCommentsArgs } from "./args/EventCommentsArgs";
export declare class EventRelationsResolver {
    author(event: Event, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    comments(event: Event, ctx: any, info: GraphQLResolveInfo, args: EventCommentsArgs): Promise<Comment[]>;
    attendees(event: Event, ctx: any, info: GraphQLResolveInfo, args: EventAttendeesArgs): Promise<Attendee[]>;
}
