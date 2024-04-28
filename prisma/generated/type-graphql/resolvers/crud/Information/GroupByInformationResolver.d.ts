import type { GraphQLResolveInfo } from "graphql";
import { GroupByInformationArgs } from "./args/GroupByInformationArgs";
import { InformationGroupBy } from "../../outputs/InformationGroupBy";
export declare class GroupByInformationResolver {
    groupByInformation(ctx: any, info: GraphQLResolveInfo, args: GroupByInformationArgs): Promise<InformationGroupBy[]>;
}
