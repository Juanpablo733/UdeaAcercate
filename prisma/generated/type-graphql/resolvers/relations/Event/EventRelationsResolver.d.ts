import type { GraphQLResolveInfo } from "graphql";
import { Attendee } from "../../../models/Attendee";
import { Event } from "../../../models/Event";
import { Information } from "../../../models/Information";
import { User } from "../../../models/User";
import { EventAttendeesArgs } from "./args/EventAttendeesArgs";
export declare class EventRelationsResolver {
    author(event: Event, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    info(event: Event, ctx: any, info: GraphQLResolveInfo): Promise<Information>;
    attendees(event: Event, ctx: any, info: GraphQLResolveInfo, args: EventAttendeesArgs): Promise<Attendee[]>;
}
