import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { AttendeeListRelationFilter } from "../inputs/AttendeeListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { ProfileNullableRelationFilter } from "../inputs/ProfileNullableRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    profile?: ProfileNullableRelationFilter | undefined;
    eventsCreated?: EventListRelationFilter | undefined;
    attendees?: AttendeeListRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
}
