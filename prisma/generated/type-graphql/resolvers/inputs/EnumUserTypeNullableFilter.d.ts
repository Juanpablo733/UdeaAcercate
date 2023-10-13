import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
export declare class EnumUserTypeNullableFilter {
    equals?: "estudiante" | "profesor" | "administrativo" | "egresado" | undefined;
    in?: Array<"estudiante" | "profesor" | "administrativo" | "egresado"> | undefined;
    notIn?: Array<"estudiante" | "profesor" | "administrativo" | "egresado"> | undefined;
    not?: NestedEnumUserTypeNullableFilter | undefined;
}
