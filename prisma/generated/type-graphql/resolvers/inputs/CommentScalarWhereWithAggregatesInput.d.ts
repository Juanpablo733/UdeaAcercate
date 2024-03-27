import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: CommentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    dateTime?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    infoId?: StringWithAggregatesFilter | undefined;
}
