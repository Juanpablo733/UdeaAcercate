import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyReportArgs } from "./args/DeleteManyReportArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReportResolver {
    deleteManyReport(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReportArgs): Promise<AffectedRowsOutput>;
}
