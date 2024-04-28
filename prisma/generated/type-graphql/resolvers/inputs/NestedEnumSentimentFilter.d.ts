export declare class NestedEnumSentimentFilter {
    equals?: "Positive" | "Neutral" | "Negative" | undefined;
    in?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    notIn?: Array<"Positive" | "Neutral" | "Negative"> | undefined;
    not?: NestedEnumSentimentFilter | undefined;
}
