"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentiment = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sentiment_1 = require("../enums/Sentiment");
let CommentSentiment = exports.CommentSentiment = class CommentSentiment {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentiment.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentiment.prototype, "sentiment", void 0);
exports.CommentSentiment = CommentSentiment = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentiment", {})
], CommentSentiment);
