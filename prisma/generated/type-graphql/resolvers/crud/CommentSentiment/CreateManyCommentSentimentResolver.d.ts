import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCommentSentimentArgs } from "./args/CreateManyCommentSentimentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCommentSentimentResolver {
    createManyCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: CreateManyCommentSentimentArgs): Promise<AffectedRowsOutput>;
}
