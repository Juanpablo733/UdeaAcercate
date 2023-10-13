import { NestedEnumTagFilter } from "../inputs/NestedEnumTagFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumTagWithAggregatesFilter {
    equals?: "deportivo" | "academico" | "cultural" | undefined;
    in?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    notIn?: Array<"deportivo" | "academico" | "cultural"> | undefined;
    not?: NestedEnumTagWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTagFilter | undefined;
    _max?: NestedEnumTagFilter | undefined;
}
