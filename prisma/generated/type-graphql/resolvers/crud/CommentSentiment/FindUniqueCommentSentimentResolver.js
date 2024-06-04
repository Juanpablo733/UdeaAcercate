"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCommentSentimentArgs_1 = require("./args/FindUniqueCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let FindUniqueCommentSentimentResolver = class FindUniqueCommentSentimentResolver {
    async commentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCommentSentimentResolver = FindUniqueCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentSentimentArgs_1.FindUniqueCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCommentSentimentResolver.prototype, "commentSentiment", null);
exports.FindUniqueCommentSentimentResolver = FindUniqueCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], FindUniqueCommentSentimentResolver);
