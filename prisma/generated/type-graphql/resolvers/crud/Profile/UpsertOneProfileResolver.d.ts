import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProfileArgs } from "./args/UpsertOneProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class UpsertOneProfileResolver {
    upsertOneProfile(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProfileArgs): Promise<Profile>;
}
