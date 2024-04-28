import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAttendeeArgs } from "./args/UpdateOneAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class UpdateOneAttendeeResolver {
    updateOneAttendee(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAttendeeArgs): Promise<Attendee | null>;
}
