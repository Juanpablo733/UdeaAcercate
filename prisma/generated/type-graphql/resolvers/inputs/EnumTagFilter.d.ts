import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
export declare class EnumTagFilter {
    equals?: "Deportivo" | "Academico" | "Cultural" | undefined;
    in?: Array<"Deportivo" | "Academico" | "Cultural"> | undefined;
    notIn?: Array<"Deportivo" | "Academico" | "Cultural"> | undefined;
    not?: NestedEnumTagFilter | undefined;
}
