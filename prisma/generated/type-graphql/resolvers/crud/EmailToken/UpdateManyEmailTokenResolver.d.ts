import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyEmailTokenArgs } from "./args/UpdateManyEmailTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEmailTokenResolver {
    updateManyEmailToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmailTokenArgs): Promise<AffectedRowsOutput>;
}
