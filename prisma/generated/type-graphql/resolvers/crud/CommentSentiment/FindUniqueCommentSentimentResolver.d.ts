import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentSentimentArgs } from "./args/FindUniqueCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class FindUniqueCommentSentimentResolver {
    commentSentiment(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCommentSentimentArgs): Promise<CommentSentiment | null>;
}
