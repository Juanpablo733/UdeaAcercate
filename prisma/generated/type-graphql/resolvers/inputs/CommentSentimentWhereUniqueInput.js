"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentWhereInput_1 = require("../inputs/CommentSentimentWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSentimentFilter_1 = require("../inputs/EnumSentimentFilter");
const EnumTagFilter_1 = require("../inputs/EnumTagFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
let CommentSentimentWhereUniqueInput = exports.CommentSentimentWhereUniqueInput = class CommentSentimentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1.CommentSentimentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1.CommentSentimentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentWhereInput_1.CommentSentimentWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentSentimentWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSentimentFilter_1.EnumSentimentFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSentimentFilter_1.EnumSentimentFilter)
], CommentSentimentWhereUniqueInput.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], CommentSentimentWhereUniqueInput.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFilter_1.EnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFilter_1.EnumTagFilter)
], CommentSentimentWhereUniqueInput.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CommentSentimentWhereUniqueInput.prototype, "dateTime", void 0);
exports.CommentSentimentWhereUniqueInput = CommentSentimentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentWhereUniqueInput", {})
], CommentSentimentWhereUniqueInput);
