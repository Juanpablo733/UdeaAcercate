"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCommentSentimentArgs_1 = require("./args/UpdateOneCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let UpdateOneCommentSentimentResolver = class UpdateOneCommentSentimentResolver {
    async updateOneCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneCommentSentimentResolver = UpdateOneCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCommentSentimentArgs_1.UpdateOneCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCommentSentimentResolver.prototype, "updateOneCommentSentiment", null);
exports.UpdateOneCommentSentimentResolver = UpdateOneCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], UpdateOneCommentSentimentResolver);
