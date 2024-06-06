import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
export declare class EnumTagFilter {
    equals?: "Deportivo" | "Academico" | "Cultural" | "Noticia" | undefined;
    in?: Array<"Deportivo" | "Academico" | "Cultural" | "Noticia"> | undefined;
    notIn?: Array<"Deportivo" | "Academico" | "Cultural" | "Noticia"> | undefined;
    not?: NestedEnumTagFilter | undefined;
}
