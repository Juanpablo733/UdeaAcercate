import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentSentimentOrThrowArgs } from "./args/FindUniqueCommentSentimentOrThrowArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class FindUniqueCommentSentimentOrThrowResolver {
    getCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCommentSentimentOrThrowArgs): Promise<CommentSentiment | null>;
}
