"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
const Tag_1 = require("../../enums/Tag");
let CommentSentimentCreateInput = class CommentSentimentCreateInput {
};
exports.CommentSentimentCreateInput = CommentSentimentCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentCreateInput.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentCreateInput.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentCreateInput.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentSentimentCreateInput.prototype, "dateTime", void 0);
exports.CommentSentimentCreateInput = CommentSentimentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentCreateInput", {})
], CommentSentimentCreateInput);
