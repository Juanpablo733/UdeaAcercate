import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProfileOrThrowArgs } from "./args/FindFirstProfileOrThrowArgs";
import { Profile } from "../../../models/Profile";
export declare class FindFirstProfileOrThrowResolver {
    findFirstProfileOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProfileOrThrowArgs): Promise<Profile | null>;
}
