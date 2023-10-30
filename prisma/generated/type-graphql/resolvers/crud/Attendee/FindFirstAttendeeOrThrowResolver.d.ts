import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAttendeeOrThrowArgs } from "./args/FindFirstAttendeeOrThrowArgs";
import { Attendee } from "../../../models/Attendee";
export declare class FindFirstAttendeeOrThrowResolver {
    findFirstAttendeeOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttendeeOrThrowArgs): Promise<Attendee | null>;
}
