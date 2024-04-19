import { AttendeeListRelationFilter } from "../inputs/AttendeeListRelationFilter";
import { EventWhereInput } from "../inputs/EventWhereInput";
import { InformationRelationFilter } from "../inputs/InformationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class EventWhereUniqueInput {
    id?: string | undefined;
    infoId?: string | undefined;
    AND?: EventWhereInput[] | undefined;
    OR?: EventWhereInput[] | undefined;
    NOT?: EventWhereInput[] | undefined;
    authorId?: StringFilter | undefined;
    place?: StringFilter | undefined;
    author?: UserRelationFilter | undefined;
    info?: InformationRelationFilter | undefined;
    attendees?: AttendeeListRelationFilter | undefined;
}
