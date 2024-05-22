import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProfileArgs } from "./args/UpdateOneProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class UpdateOneProfileResolver {
    updateOneProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProfileArgs): Promise<Profile | null>;
}
