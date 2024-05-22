import { NestedEnumRoleTagFilter } from "../inputs/NestedEnumRoleTagFilter";
export declare class EnumRoleTagFilter {
    equals?: "User" | "Admin" | undefined;
    in?: Array<"User" | "Admin"> | undefined;
    notIn?: Array<"User" | "Admin"> | undefined;
    not?: NestedEnumRoleTagFilter | undefined;
}
