"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentSentimentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCommentSentimentArgs_1 = require("./args/AggregateCommentSentimentArgs");
const CommentSentiment_1 = require("../../../models/CommentSentiment");
const AggregateCommentSentiment_1 = require("../../outputs/AggregateCommentSentiment");
const helpers_1 = require("../../../helpers");
let AggregateCommentSentimentResolver = class AggregateCommentSentimentResolver {
    async aggregateCommentSentiment(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).commentSentiment.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateCommentSentimentResolver = AggregateCommentSentimentResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCommentSentiment_1.AggregateCommentSentiment, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCommentSentimentArgs_1.AggregateCommentSentimentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCommentSentimentResolver.prototype, "aggregateCommentSentiment", null);
exports.AggregateCommentSentimentResolver = AggregateCommentSentimentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CommentSentiment_1.CommentSentiment)
], AggregateCommentSentimentResolver);
