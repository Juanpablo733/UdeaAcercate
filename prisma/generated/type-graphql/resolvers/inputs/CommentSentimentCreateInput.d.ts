export declare class CommentSentimentCreateInput {
    id: string;
    sentiment: "Positive" | "Neutral" | "Negative";
    confidence: number;
    commentTag: "Deportivo" | "Academico" | "Cultural";
    dateTime?: Date | undefined;
}
