import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentSentimentArgs } from "./args/AggregateCommentSentimentArgs";
import { AggregateCommentSentiment } from "../../outputs/AggregateCommentSentiment";
export declare class AggregateCommentSentimentResolver {
    aggregateCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: AggregateCommentSentimentArgs): Promise<AggregateCommentSentiment>;
}
