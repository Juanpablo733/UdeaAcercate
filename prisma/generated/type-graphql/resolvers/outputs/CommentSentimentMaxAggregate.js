"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
let CommentSentimentMaxAggregate = exports.CommentSentimentMaxAggregate = class CommentSentimentMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMaxAggregate.prototype, "sentiment", void 0);
exports.CommentSentimentMaxAggregate = CommentSentimentMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentMaxAggregate", {})
], CommentSentimentMaxAggregate);
