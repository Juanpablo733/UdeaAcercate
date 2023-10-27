import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    eventId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    event?: EventOrderByWithRelationInput | undefined;
}
