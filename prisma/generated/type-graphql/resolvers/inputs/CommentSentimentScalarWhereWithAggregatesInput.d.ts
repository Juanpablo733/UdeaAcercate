import { EnumSentimentWithAggregatesFilter } from "../inputs/EnumSentimentWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentSentimentScalarWhereWithAggregatesInput {
    AND?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentSentimentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    sentiment?: EnumSentimentWithAggregatesFilter | undefined;
}
