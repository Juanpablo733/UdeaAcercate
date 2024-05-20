"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
const Tag_1 = require("../../enums/Tag");
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
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentMinAggregate.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMinAggregate.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentSentimentMinAggregate.prototype, "dateTime", void 0);
exports.CommentSentimentMinAggregate = CommentSentimentMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentMinAggregate", {})
], CommentSentimentMinAggregate);
