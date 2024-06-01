import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTagWithAggregatesFilter } from "../inputs/EnumTagWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InformationScalarWhereWithAggregatesInput {
    AND?: InformationScalarWhereWithAggregatesInput[] | undefined;
    OR?: InformationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InformationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    authorId?: StringNullableWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    tag?: EnumTagWithAggregatesFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
    official?: BoolWithAggregatesFilter | undefined;
}
