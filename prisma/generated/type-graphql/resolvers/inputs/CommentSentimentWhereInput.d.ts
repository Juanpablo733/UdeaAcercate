import { EnumSentimentFilter } from "../inputs/EnumSentimentFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentSentimentWhereInput {
    AND?: CommentSentimentWhereInput[] | undefined;
    OR?: CommentSentimentWhereInput[] | undefined;
    NOT?: CommentSentimentWhereInput[] | undefined;
    id?: StringFilter | undefined;
    sentiment?: EnumSentimentFilter | undefined;
}
