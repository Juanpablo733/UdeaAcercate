"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../../enums/Sentiment");
let CommentSentimentCreateManyInput = exports.CommentSentimentCreateManyInput = class CommentSentimentCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentCreateManyInput.prototype, "sentiment", void 0);
exports.CommentSentimentCreateManyInput = CommentSentimentCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentCreateManyInput", {})
], CommentSentimentCreateManyInput);
