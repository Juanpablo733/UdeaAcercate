import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInformationOrThrowArgs } from "./args/FindFirstInformationOrThrowArgs";
import { Information } from "../../../models/Information";
export declare class FindFirstInformationOrThrowResolver {
    findFirstInformationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInformationOrThrowArgs): Promise<Information | null>;
}
