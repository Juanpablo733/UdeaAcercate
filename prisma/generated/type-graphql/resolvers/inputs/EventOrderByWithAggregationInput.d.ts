import { EventCountOrderByAggregateInput } from "../inputs/EventCountOrderByAggregateInput";
import { EventMaxOrderByAggregateInput } from "../inputs/EventMaxOrderByAggregateInput";
import { EventMinOrderByAggregateInput } from "../inputs/EventMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class EventOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    place?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    tag?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    hashtags?: "asc" | "desc" | undefined;
    _count?: EventCountOrderByAggregateInput | undefined;
    _max?: EventMaxOrderByAggregateInput | undefined;
    _min?: EventMinOrderByAggregateInput | undefined;
}
