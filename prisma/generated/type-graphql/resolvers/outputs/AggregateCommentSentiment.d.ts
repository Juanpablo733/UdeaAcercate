import { CommentSentimentCountAggregate } from "../outputs/CommentSentimentCountAggregate";
import { CommentSentimentMaxAggregate } from "../outputs/CommentSentimentMaxAggregate";
import { CommentSentimentMinAggregate } from "../outputs/CommentSentimentMinAggregate";
export declare class AggregateCommentSentiment {
    _count: CommentSentimentCountAggregate | null;
    _min: CommentSentimentMinAggregate | null;
    _max: CommentSentimentMaxAggregate | null;
}
