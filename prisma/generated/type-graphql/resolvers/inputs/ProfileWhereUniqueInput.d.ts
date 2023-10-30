import { EnumCampusNullableFilter } from "../inputs/EnumCampusNullableFilter";
import { EnumUserTypeNullableFilter } from "../inputs/EnumUserTypeNullableFilter";
import { ProfileWhereInput } from "../inputs/ProfileWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProfileWhereUniqueInput {
    userId?: string | undefined;
    AND?: ProfileWhereInput[] | undefined;
    OR?: ProfileWhereInput[] | undefined;
    NOT?: ProfileWhereInput[] | undefined;
    faculty?: StringNullableFilter | undefined;
    career?: StringNullableFilter | undefined;
    type?: EnumUserTypeNullableFilter | undefined;
    campus?: EnumCampusNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    hobbies?: StringNullableListFilter | undefined;
    socialLinks?: StringNullableListFilter | undefined;
    user?: UserRelationFilter | undefined;
}
