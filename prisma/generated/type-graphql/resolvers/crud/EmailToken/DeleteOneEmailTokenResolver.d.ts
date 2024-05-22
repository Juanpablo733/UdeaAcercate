import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEmailTokenArgs } from "./args/DeleteOneEmailTokenArgs";
import { EmailToken } from "../../../models/EmailToken";
export declare class DeleteOneEmailTokenResolver {
    deleteOneEmailToken(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEmailTokenArgs): Promise<EmailToken | null>;
}
