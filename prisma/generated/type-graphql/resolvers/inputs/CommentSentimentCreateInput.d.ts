export declare class CommentSentimentCreateInput {
    id: string;
    sentiment: "Positive" | "Neutral" | "Negative";
    confidence: number;
    commentTag: "Deportivo" | "Academico" | "Cultural" | "Noticia";
    dateTime?: Date | undefined;
}
