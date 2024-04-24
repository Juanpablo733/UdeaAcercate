import { CommentSentimentCountOrderByAggregateInput } from "../inputs/CommentSentimentCountOrderByAggregateInput";
import { CommentSentimentMaxOrderByAggregateInput } from "../inputs/CommentSentimentMaxOrderByAggregateInput";
import { CommentSentimentMinOrderByAggregateInput } from "../inputs/CommentSentimentMinOrderByAggregateInput";
export declare class CommentSentimentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    sentiment?: "asc" | "desc" | undefined;
    _count?: CommentSentimentCountOrderByAggregateInput | undefined;
    _max?: CommentSentimentMaxOrderByAggregateInput | undefined;
    _min?: CommentSentimentMinOrderByAggregateInput | undefined;
}
