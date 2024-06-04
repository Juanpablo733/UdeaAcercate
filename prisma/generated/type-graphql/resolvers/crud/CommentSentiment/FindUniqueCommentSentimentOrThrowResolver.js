"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentSentimentOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCommentSentimentOrThrowArgs_1 = require("./args/FindUniqueCommentSentimentOrThrowArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let FindUniqueCommentSentimentOrThrowResolver = class FindUniqueCommentSentimentOrThrowResolver {
    async getCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCommentSentimentOrThrowResolver = FindUniqueCommentSentimentOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCommentSentimentOrThrowArgs_1.FindUniqueCommentSentimentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCommentSentimentOrThrowResolver.prototype, "getCommentSentiment", null);
exports.FindUniqueCommentSentimentOrThrowResolver = FindUniqueCommentSentimentOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], FindUniqueCommentSentimentOrThrowResolver);
