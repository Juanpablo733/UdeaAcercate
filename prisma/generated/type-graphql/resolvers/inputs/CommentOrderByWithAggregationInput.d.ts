import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    eventId?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
}
