"use strict";
var CommentSentimentScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumSentimentWithAggregatesFilter_1 = require("../inputs/EnumSentimentWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let CommentSentimentScalarWhereWithAggregatesInput = exports.CommentSentimentScalarWhereWithAggregatesInput = CommentSentimentScalarWhereWithAggregatesInput_1 = class CommentSentimentScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], CommentSentimentScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSentimentWithAggregatesFilter_1.EnumSentimentWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSentimentWithAggregatesFilter_1.EnumSentimentWithAggregatesFilter)
], CommentSentimentScalarWhereWithAggregatesInput.prototype, "sentiment", void 0);
exports.CommentSentimentScalarWhereWithAggregatesInput = CommentSentimentScalarWhereWithAggregatesInput = CommentSentimentScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentScalarWhereWithAggregatesInput", {})
], CommentSentimentScalarWhereWithAggregatesInput);
