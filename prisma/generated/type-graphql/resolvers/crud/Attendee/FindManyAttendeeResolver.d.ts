import type { GraphQLResolveInfo } from "graphql";
import { FindManyAttendeeArgs } from "./args/FindManyAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class FindManyAttendeeResolver {
    attendees(ctx: any, info: GraphQLResolveInfo, args: FindManyAttendeeArgs): Promise<Attendee[]>;
}
