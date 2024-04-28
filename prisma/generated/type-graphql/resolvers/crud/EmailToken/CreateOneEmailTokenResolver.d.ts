import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEmailTokenArgs } from "./args/CreateOneEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class CreateOneEmailTokenResolver {
    createOneEmailToken(ctx: any, info: GraphQLResolveInfo, args: CreateOneEmailTokenArgs): Promise<EmailToken>;
}
