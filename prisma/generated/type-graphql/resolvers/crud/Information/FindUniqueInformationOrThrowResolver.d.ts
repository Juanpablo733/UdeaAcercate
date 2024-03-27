import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInformationOrThrowArgs } from "./args/FindUniqueInformationOrThrowArgs";
import { Information } from "../../../models/Information";
export declare class FindUniqueInformationOrThrowResolver {
    findUniqueInformationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInformationOrThrowArgs): Promise<Information | null>;
}
