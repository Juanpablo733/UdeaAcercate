import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailTokenArgs } from "./args/FindFirstEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class FindFirstEmailTokenResolver {
    findFirstEmailToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmailTokenArgs): Promise<EmailToken | null>;
}
