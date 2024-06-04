import type { GraphQLResolveInfo } from "graphql";
import { AggregateReportArgs } from "./args/AggregateReportArgs";
import { AggregateReport } from "../../outputs/AggregateReport";
export declare class AggregateReportResolver {
    aggregateReport(ctx: any, info: GraphQLResolveInfo, args: AggregateReportArgs): Promise<AggregateReport>;
}
