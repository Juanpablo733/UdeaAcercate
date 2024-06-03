import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneReportArgs } from "./args/UpsertOneReportArgs";
import { Report } from "../../../models/Report";
export declare class UpsertOneReportResolver {
    upsertOneReport(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReportArgs): Promise<Report>;
}
