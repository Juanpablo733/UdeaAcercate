import { InformationCountOrderByAggregateInput } from "../inputs/InformationCountOrderByAggregateInput";
import { InformationMaxOrderByAggregateInput } from "../inputs/InformationMaxOrderByAggregateInput";
import { InformationMinOrderByAggregateInput } from "../inputs/InformationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class InformationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    tag?: "asc" | "desc" | undefined;
    hashtags?: "asc" | "desc" | undefined;
    _count?: InformationCountOrderByAggregateInput | undefined;
    _max?: InformationMaxOrderByAggregateInput | undefined;
    _min?: InformationMinOrderByAggregateInput | undefined;
}
