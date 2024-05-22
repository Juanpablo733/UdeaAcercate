import { CommentSentimentCreateInput } from "../../../inputs/CommentSentimentCreateInput";
import { CommentSentimentUpdateInput } from "../../../inputs/CommentSentimentUpdateInput";
import { CommentSentimentWhereUniqueInput } from "../../../inputs/CommentSentimentWhereUniqueInput";
export declare class UpsertOneCommentSentimentArgs {
    where: CommentSentimentWhereUniqueInput;
    create: CommentSentimentCreateInput;
    update: CommentSentimentUpdateInput;
}
