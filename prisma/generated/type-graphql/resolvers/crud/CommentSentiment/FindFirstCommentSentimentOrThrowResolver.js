"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentSentimentOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCommentSentimentOrThrowArgs_1 = require("./args/FindFirstCommentSentimentOrThrowArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let FindFirstCommentSentimentOrThrowResolver = class FindFirstCommentSentimentOrThrowResolver {
    async findFirstCommentSentimentOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCommentSentimentOrThrowResolver = FindFirstCommentSentimentOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentSentimentOrThrowArgs_1.FindFirstCommentSentimentOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCommentSentimentOrThrowResolver.prototype, "findFirstCommentSentimentOrThrow", null);
exports.FindFirstCommentSentimentOrThrowResolver = FindFirstCommentSentimentOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], FindFirstCommentSentimentOrThrowResolver);
