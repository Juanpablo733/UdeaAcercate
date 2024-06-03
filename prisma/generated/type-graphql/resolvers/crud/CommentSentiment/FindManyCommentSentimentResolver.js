"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCommentSentimentArgs_1 = require("./args/FindManyCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let FindManyCommentSentimentResolver = class FindManyCommentSentimentResolver {
    async commentSentiments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyCommentSentimentResolver = FindManyCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CommentSentiment_1.CommentSentiment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCommentSentimentArgs_1.FindManyCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCommentSentimentResolver.prototype, "commentSentiments", null);
exports.FindManyCommentSentimentResolver = FindManyCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], FindManyCommentSentimentResolver);
