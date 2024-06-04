import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReportWhereInput {
    AND?: ReportWhereInput[] | undefined;
    OR?: ReportWhereInput[] | undefined;
    NOT?: ReportWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    eventId?: StringFilter | undefined;
    reason?: StringFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
}
