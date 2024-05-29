import { AttendeeOrderByRelationAggregateInput } from "../inputs/AttendeeOrderByRelationAggregateInput";
import { InformationOrderByWithRelationInput } from "../inputs/InformationOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class EventOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    infoId?: "asc" | "desc" | undefined;
    place?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    info?: InformationOrderByWithRelationInput | undefined;
    attendees?: AttendeeOrderByRelationAggregateInput | undefined;
}
