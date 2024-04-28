import { NestedEnumUserTypeNullableFilter } from "../inputs/NestedEnumUserTypeNullableFilter";
export declare class EnumUserTypeNullableFilter {
    equals?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | "Jubilado" | undefined;
    in?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado" | "Jubilado"> | undefined;
    notIn?: Array<"Estudiante" | "Profesor" | "Administrativo" | "Egresado" | "Jubilado"> | undefined;
    not?: NestedEnumUserTypeNullableFilter | undefined;
}
