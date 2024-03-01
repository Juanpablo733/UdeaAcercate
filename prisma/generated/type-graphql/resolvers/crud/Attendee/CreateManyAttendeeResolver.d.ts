import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAttendeeArgs } from "./args/CreateManyAttendeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAttendeeResolver {
    createManyAttendee(ctx: any, info: GraphQLResolveInfo, args: CreateManyAttendeeArgs): Promise<AffectedRowsOutput>;
}
