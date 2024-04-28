import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmailTokenArgs } from "./args/AggregateEmailTokenArgs";
import { AggregateEmailToken } from "../../outputs/AggregateEmailToken";
export declare class AggregateEmailTokenResolver {
    aggregateEmailToken(ctx: any, info: GraphQLResolveInfo, args: AggregateEmailTokenArgs): Promise<AggregateEmailToken>;
}
