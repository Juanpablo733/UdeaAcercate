import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AttendeeScalarWhereWithAggregatesInput {
    AND?: AttendeeScalarWhereWithAggregatesInput[] | undefined;
    OR?: AttendeeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AttendeeScalarWhereWithAggregatesInput[] | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    eventId?: StringWithAggregatesFilter | undefined;
    dateTime?: DateTimeWithAggregatesFilter | undefined;
}
