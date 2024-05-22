import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { EventNullableRelationFilter } from "../inputs/EventNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class InformationWhereInput {
    AND?: InformationWhereInput[] | undefined;
    OR?: InformationWhereInput[] | undefined;
    NOT?: InformationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    tag?: EnumTagFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    event?: EventNullableRelationFilter | undefined;
}
