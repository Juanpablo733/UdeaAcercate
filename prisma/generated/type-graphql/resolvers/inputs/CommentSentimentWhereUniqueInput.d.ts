import { CommentSentimentWhereInput } from "../inputs/CommentSentimentWhereInput";
import { EnumSentimentFilter } from "../inputs/EnumSentimentFilter";
export declare class CommentSentimentWhereUniqueInput {
    id?: string | undefined;
    AND?: CommentSentimentWhereInput[] | undefined;
    OR?: CommentSentimentWhereInput[] | undefined;
    NOT?: CommentSentimentWhereInput[] | undefined;
    sentiment?: EnumSentimentFilter | undefined;
}
