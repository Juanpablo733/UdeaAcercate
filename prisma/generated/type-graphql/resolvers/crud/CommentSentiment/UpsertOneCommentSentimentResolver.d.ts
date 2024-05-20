import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCommentSentimentArgs } from "./args/UpsertOneCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class UpsertOneCommentSentimentResolver {
    upsertOneCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCommentSentimentArgs): Promise<CommentSentiment>;
}
