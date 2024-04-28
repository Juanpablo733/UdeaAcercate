"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentOrderByWithRelationInput_1 = require("../../../inputs/CommentSentimentOrderByWithRelationInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
const CommentSentimentScalarFieldEnum_1 = require("../../../../enums/CommentSentimentScalarFieldEnum");
let FindFirstCommentSentimentArgs = exports.FindFirstCommentSentimentArgs = class FindFirstCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], FindFirstCommentSentimentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentOrderByWithRelationInput_1.CommentSentimentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentSentimentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], FindFirstCommentSentimentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentSentimentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentSentimentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarFieldEnum_1.CommentSentimentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentSentimentArgs.prototype, "distinct", void 0);
exports.FindFirstCommentSentimentArgs = FindFirstCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCommentSentimentArgs);
