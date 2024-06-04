import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyReportArgs } from "./args/UpdateManyReportArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReportResolver {
    updateManyReport(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReportArgs): Promise<AffectedRowsOutput>;
}
