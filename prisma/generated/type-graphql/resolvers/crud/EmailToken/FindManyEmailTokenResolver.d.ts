import type { GraphQLResolveInfo } from "graphql";
import { FindManyEmailTokenArgs } from "./args/FindManyEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class FindManyEmailTokenResolver {
    emailTokens(ctx: any, info: GraphQLResolveInfo, args: FindManyEmailTokenArgs): Promise<EmailToken[]>;
}
