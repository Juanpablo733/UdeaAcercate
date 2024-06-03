import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReportScalarWhereWithAggregatesInput {
    AND?: ReportScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReportScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReportScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    eventId?: StringWithAggregatesFilter | undefined;
    reason?: StringWithAggregatesFilter | undefined;
    dateTime?: DateTimeWithAggregatesFilter | undefined;
}
