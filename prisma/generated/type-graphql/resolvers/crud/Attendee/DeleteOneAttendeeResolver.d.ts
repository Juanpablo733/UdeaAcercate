import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAttendeeArgs } from "./args/DeleteOneAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class DeleteOneAttendeeResolver {
    deleteOneAttendee(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAttendeeArgs): Promise<Attendee | null>;
}
