import { EnumCampusNullableWithAggregatesFilter } from "../inputs/EnumCampusNullableWithAggregatesFilter";
import { EnumUserTypeNullableWithAggregatesFilter } from "../inputs/EnumUserTypeNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    faculty?: StringNullableWithAggregatesFilter | undefined;
    career?: StringNullableWithAggregatesFilter | undefined;
    type?: EnumUserTypeNullableWithAggregatesFilter | undefined;
    campus?: EnumCampusNullableWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    hobbies?: StringNullableListFilter | undefined;
    socialLinks?: StringNullableListFilter | undefined;
}
