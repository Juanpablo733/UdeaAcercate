import { CommentSentimentCountAggregate } from "../outputs/CommentSentimentCountAggregate";
import { CommentSentimentMaxAggregate } from "../outputs/CommentSentimentMaxAggregate";
import { CommentSentimentMinAggregate } from "../outputs/CommentSentimentMinAggregate";
export declare class CommentSentimentGroupBy {
    id: string;
    sentiment: "Positive" | "Neutral" | "Negative";
    _count: CommentSentimentCountAggregate | null;
    _min: CommentSentimentMinAggregate | null;
    _max: CommentSentimentMaxAggregate | null;
}
