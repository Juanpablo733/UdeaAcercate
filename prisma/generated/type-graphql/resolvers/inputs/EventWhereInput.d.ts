import { AttendeeListRelationFilter } from "../inputs/AttendeeListRelationFilter";
import { InformationRelationFilter } from "../inputs/InformationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class EventWhereInput {
    AND?: EventWhereInput[] | undefined;
    OR?: EventWhereInput[] | undefined;
    NOT?: EventWhereInput[] | undefined;
    id?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    infoId?: StringFilter | undefined;
    place?: StringFilter | undefined;
    author?: UserRelationFilter | undefined;
    info?: InformationRelationFilter | undefined;
    attendees?: AttendeeListRelationFilter | undefined;
}
