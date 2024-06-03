"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
const Tag_1 = require("../../enums/Tag");
let CommentSentimentMaxAggregate = class CommentSentimentMaxAggregate {
};
exports.CommentSentimentMaxAggregate = CommentSentimentMaxAggregate;
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
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentMaxAggregate.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMaxAggregate.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentSentimentMaxAggregate.prototype, "dateTime", void 0);
exports.CommentSentimentMaxAggregate = CommentSentimentMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentMaxAggregate", {})
], CommentSentimentMaxAggregate);
