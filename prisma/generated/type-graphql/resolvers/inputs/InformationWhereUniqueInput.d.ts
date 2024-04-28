import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { EventNullableRelationFilter } from "../inputs/EventNullableRelationFilter";
import { InformationWhereInput } from "../inputs/InformationWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class InformationWhereUniqueInput {
    id?: string | undefined;
    AND?: InformationWhereInput[] | undefined;
    OR?: InformationWhereInput[] | undefined;
    NOT?: InformationWhereInput[] | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    tag?: EnumTagFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    comments?: CommentListRelationFilter | undefined;
    event?: EventNullableRelationFilter | undefined;
}
