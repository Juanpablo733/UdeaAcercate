import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRoleOrThrowArgs } from "./args/FindUniqueRoleOrThrowArgs";
import { Role } from "../../../models/Role";
export declare class FindUniqueRoleOrThrowResolver {
    getRole(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRoleOrThrowArgs): Promise<Role | null>;
}
