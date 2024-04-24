import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class InformationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    tag?: "asc" | "desc" | undefined;
    hashtags?: "asc" | "desc" | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    event?: EventOrderByWithRelationInput | undefined;
}
