import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmailTokenArgs } from "./args/FindUniqueEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class FindUniqueEmailTokenResolver {
    emailToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmailTokenArgs): Promise<EmailToken | null>;
}
