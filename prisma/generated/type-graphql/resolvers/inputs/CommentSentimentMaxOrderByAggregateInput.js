"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSentimentMaxOrderByAggregateInput = exports.CommentSentimentMaxOrderByAggregateInput = class CommentSentimentMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMaxOrderByAggregateInput.prototype, "sentiment", void 0);
exports.CommentSentimentMaxOrderByAggregateInput = CommentSentimentMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentMaxOrderByAggregateInput", {})
], CommentSentimentMaxOrderByAggregateInput);
