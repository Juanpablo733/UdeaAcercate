import { EventOrderByWithRelationInput } from "../inputs/EventOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AttendeeOrderByWithRelationInput {
    userId?: "asc" | "desc" | undefined;
    eventId?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    event?: EventOrderByWithRelationInput | undefined;
}
