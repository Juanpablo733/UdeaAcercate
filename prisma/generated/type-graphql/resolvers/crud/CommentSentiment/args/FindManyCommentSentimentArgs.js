"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentOrderByWithRelationInput_1 = require("../../../inputs/CommentSentimentOrderByWithRelationInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
const CommentSentimentScalarFieldEnum_1 = require("../../../../enums/CommentSentimentScalarFieldEnum");
let FindManyCommentSentimentArgs = class FindManyCommentSentimentArgs {
};
exports.FindManyCommentSentimentArgs = FindManyCommentSentimentArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], FindManyCommentSentimentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentOrderByWithRelationInput_1.CommentSentimentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCommentSentimentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], FindManyCommentSentimentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCommentSentimentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCommentSentimentArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarFieldEnum_1.CommentSentimentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCommentSentimentArgs.prototype, "distinct", void 0);
exports.FindManyCommentSentimentArgs = FindManyCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCommentSentimentArgs);
