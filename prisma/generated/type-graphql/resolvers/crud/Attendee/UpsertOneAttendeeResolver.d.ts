import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAttendeeArgs } from "./args/UpsertOneAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class UpsertOneAttendeeResolver {
    upsertOneAttendee(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAttendeeArgs): Promise<Attendee>;
}
