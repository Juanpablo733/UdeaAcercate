"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCommentSentimentArgs_1 = require("./args/FindFirstCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const helpers_1 = require("../../../helpers");
let FindFirstCommentSentimentResolver = exports.FindFirstCommentSentimentResolver = class FindFirstCommentSentimentResolver {
    async findFirstCommentSentiment(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CommentSentiment_1.CommentSentiment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCommentSentimentArgs_1.FindFirstCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCommentSentimentResolver.prototype, "findFirstCommentSentiment", null);
exports.FindFirstCommentSentimentResolver = FindFirstCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], FindFirstCommentSentimentResolver);
