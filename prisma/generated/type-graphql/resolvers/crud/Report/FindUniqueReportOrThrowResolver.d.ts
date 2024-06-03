import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReportOrThrowArgs } from "./args/FindUniqueReportOrThrowArgs";
import { Report } from "../../../models/Report";
export declare class FindUniqueReportOrThrowResolver {
    getReport(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReportOrThrowArgs): Promise<Report | null>;
}
