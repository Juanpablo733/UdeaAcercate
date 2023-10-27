import { AttendeeCountOrderByAggregateInput } from "../inputs/AttendeeCountOrderByAggregateInput";
import { AttendeeMaxOrderByAggregateInput } from "../inputs/AttendeeMaxOrderByAggregateInput";
import { AttendeeMinOrderByAggregateInput } from "../inputs/AttendeeMinOrderByAggregateInput";
export declare class AttendeeOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    eventId?: "asc" | "desc" | undefined;
    _count?: AttendeeCountOrderByAggregateInput | undefined;
    _max?: AttendeeMaxOrderByAggregateInput | undefined;
    _min?: AttendeeMinOrderByAggregateInput | undefined;
}
