import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAttendeeArgs } from "./args/DeleteManyAttendeeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAttendeeResolver {
    deleteManyAttendee(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAttendeeArgs): Promise<AffectedRowsOutput>;
}
