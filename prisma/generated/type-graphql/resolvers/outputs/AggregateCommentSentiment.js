"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentSentiment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentAvgAggregate_1 = require("../outputs/CommentSentimentAvgAggregate");
const CommentSentimentCountAggregate_1 = require("../outputs/CommentSentimentCountAggregate");
const CommentSentimentMaxAggregate_1 = require("../outputs/CommentSentimentMaxAggregate");
const CommentSentimentMinAggregate_1 = require("../outputs/CommentSentimentMinAggregate");
const CommentSentimentSumAggregate_1 = require("../outputs/CommentSentimentSumAggregate");
let AggregateCommentSentiment = exports.AggregateCommentSentiment = class AggregateCommentSentiment {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentCountAggregate_1.CommentSentimentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentCountAggregate_1.CommentSentimentCountAggregate)
], AggregateCommentSentiment.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentAvgAggregate_1.CommentSentimentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentAvgAggregate_1.CommentSentimentAvgAggregate)
], AggregateCommentSentiment.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentSumAggregate_1.CommentSentimentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentSumAggregate_1.CommentSentimentSumAggregate)
], AggregateCommentSentiment.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMinAggregate_1.CommentSentimentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMinAggregate_1.CommentSentimentMinAggregate)
], AggregateCommentSentiment.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMaxAggregate_1.CommentSentimentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMaxAggregate_1.CommentSentimentMaxAggregate)
], AggregateCommentSentiment.prototype, "_max", void 0);
exports.AggregateCommentSentiment = AggregateCommentSentiment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCommentSentiment", {})
], AggregateCommentSentiment);
