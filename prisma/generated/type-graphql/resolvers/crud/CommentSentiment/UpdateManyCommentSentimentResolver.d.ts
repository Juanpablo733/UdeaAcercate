import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCommentSentimentArgs } from "./args/UpdateManyCommentSentimentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCommentSentimentResolver {
    updateManyCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCommentSentimentArgs): Promise<AffectedRowsOutput>;
}
