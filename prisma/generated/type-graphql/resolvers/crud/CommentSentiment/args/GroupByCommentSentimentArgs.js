"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentOrderByWithAggregationInput_1 = require("../../../inputs/CommentSentimentOrderByWithAggregationInput");
const CommentSentimentScalarWhereWithAggregatesInput_1 = require("../../../inputs/CommentSentimentScalarWhereWithAggregatesInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
const CommentSentimentScalarFieldEnum_1 = require("../../../../enums/CommentSentimentScalarFieldEnum");
let GroupByCommentSentimentArgs = class GroupByCommentSentimentArgs {
};
exports.GroupByCommentSentimentArgs = GroupByCommentSentimentArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], GroupByCommentSentimentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentOrderByWithAggregationInput_1.CommentSentimentOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentSentimentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarFieldEnum_1.CommentSentimentScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCommentSentimentArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentScalarWhereWithAggregatesInput_1.CommentSentimentScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentScalarWhereWithAggregatesInput_1.CommentSentimentScalarWhereWithAggregatesInput)
], GroupByCommentSentimentArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentSentimentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCommentSentimentArgs.prototype, "skip", void 0);
exports.GroupByCommentSentimentArgs = GroupByCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCommentSentimentArgs);
