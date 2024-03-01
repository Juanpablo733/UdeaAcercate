import type { GraphQLResolveInfo } from "graphql";
import { Attendee } from "../../../models/Attendee";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
export declare class AttendeeRelationsResolver {
    user(attendee: Attendee, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    event(attendee: Attendee, ctx: any, info: GraphQLResolveInfo): Promise<Event>;
}
