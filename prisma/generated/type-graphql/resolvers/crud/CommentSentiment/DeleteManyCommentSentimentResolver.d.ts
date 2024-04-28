import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCommentSentimentArgs } from "./args/DeleteManyCommentSentimentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCommentSentimentResolver {
    deleteManyCommentSentiment(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCommentSentimentArgs): Promise<AffectedRowsOutput>;
}
