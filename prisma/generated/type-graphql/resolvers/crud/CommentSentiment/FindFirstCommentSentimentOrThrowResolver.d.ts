import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentSentimentOrThrowArgs } from "./args/FindFirstCommentSentimentOrThrowArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class FindFirstCommentSentimentOrThrowResolver {
    findFirstCommentSentimentOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCommentSentimentOrThrowArgs): Promise<CommentSentiment | null>;
}
