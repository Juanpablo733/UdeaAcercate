import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSentimentWithAggregatesFilter } from "../inputs/EnumSentimentWithAggregatesFilter";
import { EnumTagWithAggregatesFilter } from "../inputs/EnumTagWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentSentimentScalarWhereWithAggregatesInput {
    AND?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    sentiment?: EnumSentimentWithAggregatesFilter | undefined;
    confidence?: FloatWithAggregatesFilter | undefined;
    commentTag?: EnumTagWithAggregatesFilter | undefined;
    dateTime?: DateTimeWithAggregatesFilter | undefined;
}
