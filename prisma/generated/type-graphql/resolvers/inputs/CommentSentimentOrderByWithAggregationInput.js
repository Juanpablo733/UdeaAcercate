"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentAvgOrderByAggregateInput_1 = require("../inputs/CommentSentimentAvgOrderByAggregateInput");
const CommentSentimentCountOrderByAggregateInput_1 = require("../inputs/CommentSentimentCountOrderByAggregateInput");
const CommentSentimentMaxOrderByAggregateInput_1 = require("../inputs/CommentSentimentMaxOrderByAggregateInput");
const CommentSentimentMinOrderByAggregateInput_1 = require("../inputs/CommentSentimentMinOrderByAggregateInput");
const CommentSentimentSumOrderByAggregateInput_1 = require("../inputs/CommentSentimentSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSentimentOrderByWithAggregationInput = exports.CommentSentimentOrderByWithAggregationInput = class CommentSentimentOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithAggregationInput.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithAggregationInput.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithAggregationInput.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithAggregationInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentCountOrderByAggregateInput_1.CommentSentimentCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentCountOrderByAggregateInput_1.CommentSentimentCountOrderByAggregateInput)
], CommentSentimentOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentAvgOrderByAggregateInput_1.CommentSentimentAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentAvgOrderByAggregateInput_1.CommentSentimentAvgOrderByAggregateInput)
], CommentSentimentOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMaxOrderByAggregateInput_1.CommentSentimentMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMaxOrderByAggregateInput_1.CommentSentimentMaxOrderByAggregateInput)
], CommentSentimentOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMinOrderByAggregateInput_1.CommentSentimentMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMinOrderByAggregateInput_1.CommentSentimentMinOrderByAggregateInput)
], CommentSentimentOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentSumOrderByAggregateInput_1.CommentSentimentSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentSumOrderByAggregateInput_1.CommentSentimentSumOrderByAggregateInput)
], CommentSentimentOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CommentSentimentOrderByWithAggregationInput = CommentSentimentOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentOrderByWithAggregationInput", {})
], CommentSentimentOrderByWithAggregationInput);
