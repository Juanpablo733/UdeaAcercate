import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyEmailTokenArgs } from "./args/DeleteManyEmailTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEmailTokenResolver {
    deleteManyEmailToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmailTokenArgs): Promise<AffectedRowsOutput>;
}
