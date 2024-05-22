import { CommentSentimentAvgAggregate } from "../outputs/CommentSentimentAvgAggregate";
import { CommentSentimentCountAggregate } from "../outputs/CommentSentimentCountAggregate";
import { CommentSentimentMaxAggregate } from "../outputs/CommentSentimentMaxAggregate";
import { CommentSentimentMinAggregate } from "../outputs/CommentSentimentMinAggregate";
import { CommentSentimentSumAggregate } from "../outputs/CommentSentimentSumAggregate";
export declare class CommentSentimentGroupBy {
    id: string;
    sentiment: "Positive" | "Neutral" | "Negative";
    confidence: number;
    commentTag: "Deportivo" | "Academico" | "Cultural";
    dateTime: Date;
    _count: CommentSentimentCountAggregate | null;
    _avg: CommentSentimentAvgAggregate | null;
    _sum: CommentSentimentSumAggregate | null;
    _min: CommentSentimentMinAggregate | null;
    _max: CommentSentimentMaxAggregate | null;
}
