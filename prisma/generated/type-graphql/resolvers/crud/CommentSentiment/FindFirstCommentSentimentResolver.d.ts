import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentSentimentArgs } from "./args/FindFirstCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class FindFirstCommentSentimentResolver {
    findFirstCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: FindFirstCommentSentimentArgs): Promise<CommentSentiment | null>;
}
