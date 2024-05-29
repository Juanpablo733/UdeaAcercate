import type { GraphQLResolveInfo } from "graphql";
import { GroupByCommentSentimentArgs } from "./args/GroupByCommentSentimentArgs";
import { CommentSentimentGroupBy } from "../../outputs/CommentSentimentGroupBy";
export declare class GroupByCommentSentimentResolver {
    groupByCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: GroupByCommentSentimentArgs): Promise<CommentSentimentGroupBy[]>;
}
