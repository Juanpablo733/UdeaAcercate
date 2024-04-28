"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
let CommentSentimentMinAggregate = exports.CommentSentimentMinAggregate = class CommentSentimentMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMinAggregate.prototype, "sentiment", void 0);
exports.CommentSentimentMinAggregate = CommentSentimentMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentMinAggregate", {})
], CommentSentimentMinAggregate);
