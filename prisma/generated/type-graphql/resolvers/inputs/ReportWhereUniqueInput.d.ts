import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReportUserIdEventIdCompoundUniqueInput } from "../inputs/ReportUserIdEventIdCompoundUniqueInput";
import { ReportWhereInput } from "../inputs/ReportWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReportWhereUniqueInput {
    userId_eventId?: ReportUserIdEventIdCompoundUniqueInput | undefined;
    AND?: ReportWhereInput[] | undefined;
    OR?: ReportWhereInput[] | undefined;
    NOT?: ReportWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    eventId?: StringFilter | undefined;
    reason?: StringFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
}
