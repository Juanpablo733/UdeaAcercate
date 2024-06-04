import { ReportOrderByWithAggregationInput } from "../../../inputs/ReportOrderByWithAggregationInput";
import { ReportScalarWhereWithAggregatesInput } from "../../../inputs/ReportScalarWhereWithAggregatesInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
export declare class GroupByReportArgs {
    where?: ReportWhereInput | undefined;
    orderBy?: ReportOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "eventId" | "reason" | "dateTime">;
    having?: ReportScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
