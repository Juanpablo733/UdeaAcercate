import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
import { NestedEnumUserTypeNullableWithAggregatesFilter } from "../inputs/NestedEnumUserTypeNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumUserTypeNullableWithAggregatesFilter {
    equals?: "estudiante" | "profesor" | "administrativo" | "egresado" | undefined;
    in?: Array<"estudiante" | "profesor" | "administrativo" | "egresado"> | undefined;
    notIn?: Array<"estudiante" | "profesor" | "administrativo" | "egresado"> | undefined;
    not?: NestedEnumUserTypeNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumUserTypeNullableFilter | undefined;
    _max?: NestedEnumUserTypeNullableFilter | undefined;
}
