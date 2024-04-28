import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyInformationArgs } from "./args/DeleteManyInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInformationResolver {
    deleteManyInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInformationArgs): Promise<AffectedRowsOutput>;
}
