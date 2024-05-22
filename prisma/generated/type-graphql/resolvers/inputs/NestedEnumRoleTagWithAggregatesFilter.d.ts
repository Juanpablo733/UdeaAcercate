import { NestedEnumRoleTagFilter } from "../inputs/NestedEnumRoleTagFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRoleTagWithAggregatesFilter {
    equals?: "User" | "Admin" | undefined;
    in?: Array<"User" | "Admin"> | undefined;
    notIn?: Array<"User" | "Admin"> | undefined;
    not?: NestedEnumRoleTagWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRoleTagFilter | undefined;
    _max?: NestedEnumRoleTagFilter | undefined;
}
