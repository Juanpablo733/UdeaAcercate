import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class InformationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    authorId?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    tag?: "asc" | "desc" | undefined;
    hashtags?: "asc" | "desc" | undefined;
    official?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    event?: EventOrderByWithRelationInput | undefined;
}
