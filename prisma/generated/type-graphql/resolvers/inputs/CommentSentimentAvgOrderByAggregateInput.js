"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSentimentAvgOrderByAggregateInput = class CommentSentimentAvgOrderByAggregateInput {
};
exports.CommentSentimentAvgOrderByAggregateInput = CommentSentimentAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentAvgOrderByAggregateInput.prototype, "confidence", void 0);
exports.CommentSentimentAvgOrderByAggregateInput = CommentSentimentAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentAvgOrderByAggregateInput", {})
], CommentSentimentAvgOrderByAggregateInput);
