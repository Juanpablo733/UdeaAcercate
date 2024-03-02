import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAttendeeArgs } from "./args/FindUniqueAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class FindUniqueAttendeeResolver {
    attendee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttendeeArgs): Promise<Attendee | null>;
}
