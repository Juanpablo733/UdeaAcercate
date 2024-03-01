import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProfileOrThrowArgs } from "./args/FindUniqueProfileOrThrowArgs";
import { Profile } from "../../../models/Profile";
export declare class FindUniqueProfileOrThrowResolver {
    getProfile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProfileOrThrowArgs): Promise<Profile | null>;
}
