import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
export declare class RoleOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    _count?: RoleCountOrderByAggregateInput | undefined;
    _max?: RoleMaxOrderByAggregateInput | undefined;
    _min?: RoleMinOrderByAggregateInput | undefined;
}
