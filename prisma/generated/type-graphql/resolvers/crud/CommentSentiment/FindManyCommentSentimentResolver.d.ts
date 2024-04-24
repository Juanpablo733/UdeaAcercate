import type { GraphQLResolveInfo } from "graphql";
import { FindManyCommentSentimentArgs } from "./args/FindManyCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class FindManyCommentSentimentResolver {
    commentSentiments(ctx: any, info: GraphQLResolveInfo, args: FindManyCommentSentimentArgs): Promise<CommentSentiment[]>;
}
