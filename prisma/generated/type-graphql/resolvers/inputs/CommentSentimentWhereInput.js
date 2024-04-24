"use strict";
var CommentSentimentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumSentimentFilter_1 = require("../inputs/EnumSentimentFilter");
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
exports.CommentSentimentWhereInput = CommentSentimentWhereInput = CommentSentimentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentWhereInput", {})
], CommentSentimentWhereInput);
