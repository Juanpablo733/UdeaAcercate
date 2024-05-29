import { CommentSentimentWhereInput } from "../inputs/CommentSentimentWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSentimentFilter } from "../inputs/EnumSentimentFilter";
import { EnumTagFilter } from "../inputs/EnumTagFilter";
import { FloatFilter } from "../inputs/FloatFilter";
export declare class CommentSentimentWhereUniqueInput {
    id?: string | undefined;
    AND?: CommentSentimentWhereInput[] | undefined;
    OR?: CommentSentimentWhereInput[] | undefined;
    NOT?: CommentSentimentWhereInput[] | undefined;
    sentiment?: EnumSentimentFilter | undefined;
    confidence?: FloatFilter | undefined;
    commentTag?: EnumTagFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
}
