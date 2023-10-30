import { AttendeeUserIdEventIdCompoundUniqueInput } from "../inputs/AttendeeUserIdEventIdCompoundUniqueInput";
import { AttendeeWhereInput } from "../inputs/AttendeeWhereInput";
import { EventRelationFilter } from "../inputs/EventRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AttendeeWhereUniqueInput {
    userId_eventId?: AttendeeUserIdEventIdCompoundUniqueInput | undefined;
    AND?: AttendeeWhereInput[] | undefined;
    OR?: AttendeeWhereInput[] | undefined;
    NOT?: AttendeeWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    eventId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    event?: EventRelationFilter | undefined;
}
