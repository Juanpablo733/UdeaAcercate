import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInformationArgs } from "./args/FindFirstInformationArgs";
import { Information } from "../../../models/Information";
export declare class FindFirstInformationResolver {
    findFirstInformation(ctx: any, info: GraphQLResolveInfo, args: FindFirstInformationArgs): Promise<Information | null>;
}
