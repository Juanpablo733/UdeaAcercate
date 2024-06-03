"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCommentSentimentArgs_1 = require("./args/DeleteManyCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCommentSentimentResolver = class DeleteManyCommentSentimentResolver {
    async deleteManyCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyCommentSentimentResolver = DeleteManyCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCommentSentimentArgs_1.DeleteManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCommentSentimentResolver.prototype, "deleteManyCommentSentiment", null);
exports.DeleteManyCommentSentimentResolver = DeleteManyCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], DeleteManyCommentSentimentResolver);
