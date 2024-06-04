import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneReportArgs } from "./args/DeleteOneReportArgs";
import { Report } from "../../../models/Report";
export declare class DeleteOneReportResolver {
    deleteOneReport(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReportArgs): Promise<Report | null>;
}
