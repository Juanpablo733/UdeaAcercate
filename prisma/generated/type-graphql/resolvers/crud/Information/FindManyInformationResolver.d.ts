import type { GraphQLResolveInfo } from "graphql";
import { FindManyInformationArgs } from "./args/FindManyInformationArgs";
import { Information } from "../../../models/Information";
export declare class FindManyInformationResolver {
    findManyInformation(ctx: any, info: GraphQLResolveInfo, args: FindManyInformationArgs): Promise<Information[]>;
}
