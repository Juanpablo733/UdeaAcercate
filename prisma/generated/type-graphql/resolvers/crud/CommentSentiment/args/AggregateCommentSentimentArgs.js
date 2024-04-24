"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentOrderByWithRelationInput_1 = require("../../../inputs/CommentSentimentOrderByWithRelationInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let AggregateCommentSentimentArgs = exports.AggregateCommentSentimentArgs = class AggregateCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], AggregateCommentSentimentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentOrderByWithRelationInput_1.CommentSentimentOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCommentSentimentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], AggregateCommentSentimentArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCommentSentimentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCommentSentimentArgs.prototype, "skip", void 0);
exports.AggregateCommentSentimentArgs = AggregateCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCommentSentimentArgs);
