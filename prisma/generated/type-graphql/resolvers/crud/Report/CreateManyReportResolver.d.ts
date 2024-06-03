import type { GraphQLResolveInfo } from "graphql";
import { CreateManyReportArgs } from "./args/CreateManyReportArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReportResolver {
    createManyReport(ctx: any, info: GraphQLResolveInfo, args: CreateManyReportArgs): Promise<AffectedRowsOutput>;
}
