import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyInformationArgs } from "./args/UpdateManyInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInformationResolver {
    updateManyInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInformationArgs): Promise<AffectedRowsOutput>;
}
