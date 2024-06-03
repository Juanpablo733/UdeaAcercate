"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCommentSentimentOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentOrderByWithRelationInput_1 = require("../../../inputs/CommentSentimentOrderByWithRelationInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
const CommentSentimentScalarFieldEnum_1 = require("../../../../enums/CommentSentimentScalarFieldEnum");
let FindFirstCommentSentimentOrThrowArgs = class FindFirstCommentSentimentOrThrowArgs {
};
exports.FindFirstCommentSentimentOrThrowArgs = FindFirstCommentSentimentOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], FindFirstCommentSentimentOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentOrderByWithRelationInput_1.CommentSentimentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentSentimentOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], FindFirstCommentSentimentOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentSentimentOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCommentSentimentOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentScalarFieldEnum_1.CommentSentimentScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCommentSentimentOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstCommentSentimentOrThrowArgs = FindFirstCommentSentimentOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCommentSentimentOrThrowArgs);
