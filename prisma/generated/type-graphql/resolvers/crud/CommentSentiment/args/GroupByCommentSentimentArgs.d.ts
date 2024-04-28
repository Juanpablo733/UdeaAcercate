import { CommentSentimentOrderByWithAggregationInput } from "../../../inputs/CommentSentimentOrderByWithAggregationInput";
import { CommentSentimentScalarWhereWithAggregatesInput } from "../../../inputs/CommentSentimentScalarWhereWithAggregatesInput";
import { CommentSentimentWhereInput } from "../../../inputs/CommentSentimentWhereInput";
export declare class GroupByCommentSentimentArgs {
    where?: CommentSentimentWhereInput | undefined;
    orderBy?: CommentSentimentOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "sentiment">;
    having?: CommentSentimentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
