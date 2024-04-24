import { EnumRoleTagFilter } from "../inputs/EnumRoleTagFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    role?: EnumRoleTagFilter | undefined;
}
