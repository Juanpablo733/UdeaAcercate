import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCommentSentimentArgs } from "./args/DeleteOneCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class DeleteOneCommentSentimentResolver {
    deleteOneCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCommentSentimentArgs): Promise<CommentSentiment | null>;
}
