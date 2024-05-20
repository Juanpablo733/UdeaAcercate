"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCommentSentimentArgs_1 = require("./args/UpdateManyCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCommentSentimentResolver = exports.UpdateManyCommentSentimentResolver = class UpdateManyCommentSentimentResolver {
    async updateManyCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCommentSentimentArgs_1.UpdateManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCommentSentimentResolver.prototype, "updateManyCommentSentiment", null);
exports.UpdateManyCommentSentimentResolver = UpdateManyCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], UpdateManyCommentSentimentResolver);
