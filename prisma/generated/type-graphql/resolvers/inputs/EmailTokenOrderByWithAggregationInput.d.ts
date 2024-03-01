import { EmailTokenCountOrderByAggregateInput } from "../inputs/EmailTokenCountOrderByAggregateInput";
import { EmailTokenMaxOrderByAggregateInput } from "../inputs/EmailTokenMaxOrderByAggregateInput";
import { EmailTokenMinOrderByAggregateInput } from "../inputs/EmailTokenMinOrderByAggregateInput";
export declare class EmailTokenOrderByWithAggregationInput {
    identifier?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    _count?: EmailTokenCountOrderByAggregateInput | undefined;
    _max?: EmailTokenMaxOrderByAggregateInput | undefined;
    _min?: EmailTokenMinOrderByAggregateInput | undefined;
}
