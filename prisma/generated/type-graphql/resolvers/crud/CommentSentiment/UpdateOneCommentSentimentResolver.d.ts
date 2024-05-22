import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommentSentimentArgs } from "./args/UpdateOneCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class UpdateOneCommentSentimentResolver {
    updateOneCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCommentSentimentArgs): Promise<CommentSentiment | null>;
}
