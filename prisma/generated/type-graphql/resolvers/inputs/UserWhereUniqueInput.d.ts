import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { AttendeeListRelationFilter } from "../inputs/AttendeeListRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { ProfileNullableRelationFilter } from "../inputs/ProfileNullableRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringNullableFilter | undefined;
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
