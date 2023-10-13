import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttendeeArgs } from "./args/FindFirstAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class FindFirstAttendeeResolver {
    findFirstAttendee(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttendeeArgs): Promise<Attendee | null>;
}
