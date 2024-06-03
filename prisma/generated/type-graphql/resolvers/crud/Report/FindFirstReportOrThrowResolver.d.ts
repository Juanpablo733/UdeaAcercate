import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReportOrThrowArgs } from "./args/FindFirstReportOrThrowArgs";
import { Report } from "../../../models/Report";
export declare class FindFirstReportOrThrowResolver {
    findFirstReportOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReportOrThrowArgs): Promise<Report | null>;
}
