import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneReportArgs } from "./args/UpdateOneReportArgs";
import { Report } from "../../../models/Report";
export declare class UpdateOneReportResolver {
    updateOneReport(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReportArgs): Promise<Report | null>;
}
