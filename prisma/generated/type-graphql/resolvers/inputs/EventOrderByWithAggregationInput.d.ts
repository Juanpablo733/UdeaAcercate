import { EventCountOrderByAggregateInput } from "../inputs/EventCountOrderByAggregateInput";
import { EventMaxOrderByAggregateInput } from "../inputs/EventMaxOrderByAggregateInput";
import { EventMinOrderByAggregateInput } from "../inputs/EventMinOrderByAggregateInput";
export declare class EventOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    infoId?: "asc" | "desc" | undefined;
    place?: "asc" | "desc" | undefined;
    _count?: EventCountOrderByAggregateInput | undefined;
    _max?: EventMaxOrderByAggregateInput | undefined;
    _min?: EventMinOrderByAggregateInput | undefined;
}
