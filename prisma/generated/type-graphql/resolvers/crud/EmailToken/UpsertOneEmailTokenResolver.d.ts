import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEmailTokenArgs } from "./args/UpsertOneEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class UpsertOneEmailTokenResolver {
    upsertOneEmailToken(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEmailTokenArgs): Promise<EmailToken>;
}
