import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class InformationScalarWhereInput {
    AND?: InformationScalarWhereInput[] | undefined;
    OR?: InformationScalarWhereInput[] | undefined;
    NOT?: InformationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    authorId?: StringNullableFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    date?: DateTimeFilter | undefined;
    image?: StringNullableFilter | undefined;
    tag?: EnumTagFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    official?: BoolFilter | undefined;
}
