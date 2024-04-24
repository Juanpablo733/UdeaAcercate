import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProfileArgs } from "./args/CreateOneProfileArgs";
import { Profile } from "../../../models/Profile";
export declare class CreateOneProfileResolver {
    createOneProfile(ctx: any, info: GraphQLResolveInfo, args: CreateOneProfileArgs): Promise<Profile>;
}
