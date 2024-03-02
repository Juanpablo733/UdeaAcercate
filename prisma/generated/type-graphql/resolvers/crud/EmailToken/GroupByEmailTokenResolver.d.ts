import type { GraphQLResolveInfo } from "graphql";
import { GroupByEmailTokenArgs } from "./args/GroupByEmailTokenArgs";
import { EmailTokenGroupBy } from "../../outputs/EmailTokenGroupBy";
export declare class GroupByEmailTokenResolver {
    groupByEmailToken(ctx: any, info: GraphQLResolveInfo, args: GroupByEmailTokenArgs): Promise<EmailTokenGroupBy[]>;
}
