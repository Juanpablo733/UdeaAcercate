import { AttendeeOrderByRelationAggregateInput } from "../inputs/AttendeeOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class EventOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    place?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    tag?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    hashtags?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    attendees?: AttendeeOrderByRelationAggregateInput | undefined;
}
