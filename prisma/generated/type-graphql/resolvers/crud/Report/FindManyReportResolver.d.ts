import type { GraphQLResolveInfo } from "graphql";
import { FindManyReportArgs } from "./args/FindManyReportArgs";
import { Report } from "../../../models/Report";
export declare class FindManyReportResolver {
    reports(ctx: any, info: GraphQLResolveInfo, args: FindManyReportArgs): Promise<Report[]>;
}
