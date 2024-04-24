import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAttendeeArgs } from "./args/CreateOneAttendeeArgs";
import { Attendee } from "../../../models/Attendee";
export declare class CreateOneAttendeeResolver {
    createOneAttendee(ctx: any, info: GraphQLResolveInfo, args: CreateOneAttendeeArgs): Promise<Attendee>;
}
