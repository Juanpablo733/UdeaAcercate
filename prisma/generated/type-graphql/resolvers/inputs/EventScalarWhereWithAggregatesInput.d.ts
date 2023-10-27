import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTagWithAggregatesFilter } from "../inputs/EnumTagWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EventScalarWhereWithAggregatesInput {
    AND?: EventScalarWhereWithAggregatesInput[] | undefined;
    OR?: EventScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EventScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    place?: StringWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    tag?: EnumTagWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    hashtags?: StringNullableListFilter | undefined;
}
