import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProfileArgs } from "./args/DeleteOneProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class DeleteOneProfileResolver {
    deleteOneProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProfileArgs): Promise<Profile | null>;
}
