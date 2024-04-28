import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAttendeeArgs } from "./args/UpdateManyAttendeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAttendeeResolver {
    updateManyAttendee(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAttendeeArgs): Promise<AffectedRowsOutput>;
}
