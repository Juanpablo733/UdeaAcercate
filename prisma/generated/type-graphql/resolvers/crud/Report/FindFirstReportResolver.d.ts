import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReportArgs } from "./args/FindFirstReportArgs";
import { Report } from "../../../models/Report";
export declare class FindFirstReportResolver {
    findFirstReport(ctx: any, info: GraphQLResolveInfo, args: FindFirstReportArgs): Promise<Report | null>;
}
