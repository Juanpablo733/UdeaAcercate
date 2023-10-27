import type { GraphQLResolveInfo } from "graphql";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
export declare class ProfileRelationsResolver {
    user(profile: Profile, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
