import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAttendeeOrThrowArgs } from "./args/FindUniqueAttendeeOrThrowArgs";
import { Attendee } from "../../../models/Attendee";
export declare class FindUniqueAttendeeOrThrowResolver {
    getAttendee(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttendeeOrThrowArgs): Promise<Attendee | null>;
}
