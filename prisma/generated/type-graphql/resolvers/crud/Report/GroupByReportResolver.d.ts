import type { GraphQLResolveInfo } from "graphql";
import { GroupByReportArgs } from "./args/GroupByReportArgs";
import { ReportGroupBy } from "../../outputs/ReportGroupBy";
export declare class GroupByReportResolver {
    groupByReport(ctx: any, info: GraphQLResolveInfo, args: GroupByReportArgs): Promise<ReportGroupBy[]>;
}
