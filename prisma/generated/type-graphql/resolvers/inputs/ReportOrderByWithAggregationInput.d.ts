import { ReportCountOrderByAggregateInput } from "../inputs/ReportCountOrderByAggregateInput";
import { ReportMaxOrderByAggregateInput } from "../inputs/ReportMaxOrderByAggregateInput";
import { ReportMinOrderByAggregateInput } from "../inputs/ReportMinOrderByAggregateInput";
export declare class ReportOrderByWithAggregationInput {
    userId?: "asc" | "desc" | undefined;
    eventId?: "asc" | "desc" | undefined;
    reason?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    _count?: ReportCountOrderByAggregateInput | undefined;
    _max?: ReportMaxOrderByAggregateInput | undefined;
    _min?: ReportMinOrderByAggregateInput | undefined;
}
