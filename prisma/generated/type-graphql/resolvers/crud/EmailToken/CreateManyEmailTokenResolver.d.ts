import type { GraphQLResolveInfo } from "graphql";
import { CreateManyEmailTokenArgs } from "./args/CreateManyEmailTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEmailTokenResolver {
    createManyEmailToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmailTokenArgs): Promise<AffectedRowsOutput>;
}
