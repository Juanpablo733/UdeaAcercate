import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[] | undefined;
    OR?: CommentScalarWhereInput[] | undefined;
    NOT?: CommentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
    userId?: StringFilter | undefined;
    infoId?: StringFilter | undefined;
}
