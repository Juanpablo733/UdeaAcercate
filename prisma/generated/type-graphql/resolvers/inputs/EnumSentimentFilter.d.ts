import { NestedEnumSentimentFilter } from "../inputs/NestedEnumSentimentFilter";
export declare class EnumSentimentFilter {
    equals?: "Positive" | "Neutral" | "Negative" | undefined;
    in?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    notIn?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    not?: NestedEnumSentimentFilter | undefined;
}
