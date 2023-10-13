import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
export declare class EnumTagFilter {
    equals?: "deportivo" | "academico" | "cultural" | undefined;
    in?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    notIn?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    not?: NestedEnumTagFilter | undefined;
}
