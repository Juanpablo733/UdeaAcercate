import { CommentSentimentAvgOrderByAggregateInput } from "../inputs/CommentSentimentAvgOrderByAggregateInput";
import { CommentSentimentCountOrderByAggregateInput } from "../inputs/CommentSentimentCountOrderByAggregateInput";
import { CommentSentimentMaxOrderByAggregateInput } from "../inputs/CommentSentimentMaxOrderByAggregateInput";
import { CommentSentimentMinOrderByAggregateInput } from "../inputs/CommentSentimentMinOrderByAggregateInput";
import { CommentSentimentSumOrderByAggregateInput } from "../inputs/CommentSentimentSumOrderByAggregateInput";
export declare class CommentSentimentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    sentiment?: "asc" | "desc" | undefined;
    confidence?: "asc" | "desc" | undefined;
    commentTag?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    _count?: CommentSentimentCountOrderByAggregateInput | undefined;
    _avg?: CommentSentimentAvgOrderByAggregateInput | undefined;
    _max?: CommentSentimentMaxOrderByAggregateInput | undefined;
    _min?: CommentSentimentMinOrderByAggregateInput | undefined;
    _sum?: CommentSentimentSumOrderByAggregateInput | undefined;
}
