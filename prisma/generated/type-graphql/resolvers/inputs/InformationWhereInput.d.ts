import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { EventNullableRelationFilter } from "../inputs/EventNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
export declare class InformationWhereInput {
    AND?: InformationWhereInput[] | undefined;
    OR?: InformationWhereInput[] | undefined;
    NOT?: InformationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    tag?: EnumTagFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    official?: BoolFilter | undefined;
    author?: UserNullableRelationFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    event?: EventNullableRelationFilter | undefined;
}
