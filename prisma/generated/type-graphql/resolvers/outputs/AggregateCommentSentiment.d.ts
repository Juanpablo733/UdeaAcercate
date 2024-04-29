import { CommentSentimentAvgAggregate } from "../outputs/CommentSentimentAvgAggregate";
import { CommentSentimentCountAggregate } from "../outputs/CommentSentimentCountAggregate";
import { CommentSentimentMaxAggregate } from "../outputs/CommentSentimentMaxAggregate";
import { CommentSentimentMinAggregate } from "../outputs/CommentSentimentMinAggregate";
import { CommentSentimentSumAggregate } from "../outputs/CommentSentimentSumAggregate";
export declare class AggregateCommentSentiment {
    _count: CommentSentimentCountAggregate | null;
    _avg: CommentSentimentAvgAggregate | null;
    _sum: CommentSentimentSumAggregate | null;
    _min: CommentSentimentMinAggregate | null;
    _max: CommentSentimentMaxAggregate | null;
}
