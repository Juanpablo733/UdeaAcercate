import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmailTokenOrThrowArgs } from "./args/FindUniqueEmailTokenOrThrowArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class FindUniqueEmailTokenOrThrowResolver {
    getEmailToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmailTokenOrThrowArgs): Promise<EmailToken | null>;
}
