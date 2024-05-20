import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInformationArgs } from "./args/FindUniqueInformationArgs";
import { Information } from "../../../models/Information";
export declare class FindUniqueInformationResolver {
    findUniqueInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInformationArgs): Promise<Information | null>;
}
