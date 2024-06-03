"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentSentimentSumAggregate = class CommentSentimentSumAggregate {
};
exports.CommentSentimentSumAggregate = CommentSentimentSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentSumAggregate.prototype, "confidence", void 0);
exports.CommentSentimentSumAggregate = CommentSentimentSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentSumAggregate", {})
], CommentSentimentSumAggregate);
