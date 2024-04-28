import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailTokenOrThrowArgs } from "./args/FindFirstEmailTokenOrThrowArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class FindFirstEmailTokenOrThrowResolver {
    findFirstEmailTokenOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmailTokenOrThrowArgs): Promise<EmailToken | null>;
}
