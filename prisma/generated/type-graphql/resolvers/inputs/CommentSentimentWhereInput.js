"use strict";
var CommentSentimentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSentimentFilter_1 = require("../inputs/EnumSentimentFilter");
const EnumTagFilter_1 = require("../inputs/EnumTagFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CommentSentimentWhereInput = exports.CommentSentimentWhereInput = CommentSentimentWhereInput_1 = class CommentSentimentWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentSentimentWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSentimentFilter_1.EnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSentimentFilter_1.EnumSentimentFilter)
], CommentSentimentWhereInput.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], CommentSentimentWhereInput.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFilter_1.EnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFilter_1.EnumTagFilter)
], CommentSentimentWhereInput.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentSentimentWhereInput.prototype, "dateTime", void 0);
exports.CommentSentimentWhereInput = CommentSentimentWhereInput = CommentSentimentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentWhereInput", {})
], CommentSentimentWhereInput);
