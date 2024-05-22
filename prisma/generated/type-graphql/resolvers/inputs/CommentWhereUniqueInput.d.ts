import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { InformationRelationFilter } from "../inputs/InformationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereUniqueInput {
    id?: string | undefined;
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    text?: StringFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
    userId?: StringFilter | undefined;
    infoId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    info?: InformationRelationFilter | undefined;
}
