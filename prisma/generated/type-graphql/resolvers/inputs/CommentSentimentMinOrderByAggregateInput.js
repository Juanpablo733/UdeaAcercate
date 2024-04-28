"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSentimentMinOrderByAggregateInput = exports.CommentSentimentMinOrderByAggregateInput = class CommentSentimentMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentMinOrderByAggregateInput.prototype, "sentiment", void 0);
exports.CommentSentimentMinOrderByAggregateInput = CommentSentimentMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentMinOrderByAggregateInput", {})
], CommentSentimentMinOrderByAggregateInput);
