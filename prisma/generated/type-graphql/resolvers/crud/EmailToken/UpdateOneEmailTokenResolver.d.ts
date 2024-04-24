import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEmailTokenArgs } from "./args/UpdateOneEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class UpdateOneEmailTokenResolver {
    updateOneEmailToken(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEmailTokenArgs): Promise<EmailToken | null>;
}
