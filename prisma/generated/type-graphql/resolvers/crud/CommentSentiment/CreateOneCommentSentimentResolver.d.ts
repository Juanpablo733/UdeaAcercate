import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCommentSentimentArgs } from "./args/CreateOneCommentSentimentArgs";
import { CommentSentiment } from "../../../models/CommentSentiment";
export declare class CreateOneCommentSentimentResolver {
    createOneCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: CreateOneCommentSentimentArgs): Promise<CommentSentiment>;
}
