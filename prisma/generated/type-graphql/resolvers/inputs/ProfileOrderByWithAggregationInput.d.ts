import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ProfileOrderByWithAggregationInput {
    faculty?: SortOrderInput | undefined;
    career?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    campus?: SortOrderInput | undefined;
    userId?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    hobbies?: "asc" | "desc" | undefined;
    socialLinks?: "asc" | "desc" | undefined;
    _count?: ProfileCountOrderByAggregateInput | undefined;
    _max?: ProfileMaxOrderByAggregateInput | undefined;
    _min?: ProfileMinOrderByAggregateInput | undefined;
}
