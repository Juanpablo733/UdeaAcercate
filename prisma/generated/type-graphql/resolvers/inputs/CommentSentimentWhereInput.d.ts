import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSentimentFilter } from "../inputs/EnumSentimentFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentSentimentWhereInput {
    AND?: CommentSentimentWhereInput[] | undefined;
    OR?: CommentSentimentWhereInput[] | undefined;
    NOT?: CommentSentimentWhereInput[] | undefined;
    id?: StringFilter | undefined;
    sentiment?: EnumSentimentFilter | undefined;
    confidence?: FloatFilter | undefined;
    commentTag?: EnumTagFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
}
