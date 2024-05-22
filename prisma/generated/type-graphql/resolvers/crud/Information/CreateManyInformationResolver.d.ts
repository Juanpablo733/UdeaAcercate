import type { GraphQLResolveInfo } from "graphql";
import { CreateManyInformationArgs } from "./args/CreateManyInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInformationResolver {
    createManyInformation(ctx: any, info: GraphQLResolveInfo, args: CreateManyInformationArgs): Promise<AffectedRowsOutput>;
}
