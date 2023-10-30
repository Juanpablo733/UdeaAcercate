import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumUserTypeNullableWithAggregatesFilter {
    equals?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | undefined;
    in?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    notIn?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    not?: NestedEnumUserTypeNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumUserTypeNullableFilter | undefined;
    _max?: NestedEnumUserTypeNullableFilter | undefined;
}
