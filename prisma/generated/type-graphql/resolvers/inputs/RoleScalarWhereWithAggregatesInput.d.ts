import { EnumRoleTagWithAggregatesFilter } from "../inputs/EnumRoleTagWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RoleScalarWhereWithAggregatesInput {
    AND?: RoleScalarWhereWithAggregatesInput[] | undefined;
    OR?: RoleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    role?: EnumRoleTagWithAggregatesFilter | undefined;
}
