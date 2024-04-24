import { EnumRoleTagFilter } from "../inputs/EnumRoleTagFilter";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
export declare class RoleWhereUniqueInput {
    userId?: string | undefined;
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    role?: EnumRoleTagFilter | undefined;
}
