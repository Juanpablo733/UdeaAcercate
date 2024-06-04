import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReportArgs } from "./args/FindUniqueReportArgs";
import { Report } from "../../../models/Report";
export declare class FindUniqueReportResolver {
    report(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReportArgs): Promise<Report | null>;
}
