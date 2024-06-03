import type { GraphQLResolveInfo } from "graphql";
import { CreateOneReportArgs } from "./args/CreateOneReportArgs";
import { Report } from "../../../models/Report";
export declare class CreateOneReportResolver {
    createOneReport(ctx: any, info: GraphQLResolveInfo, args: CreateOneReportArgs): Promise<Report>;
}
