import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
export declare class EnumUserTypeNullableFilter {
    equals?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | undefined;
    in?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    notIn?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado"> | undefined;
    not?: NestedEnumUserTypeNullableFilter | undefined;
}
