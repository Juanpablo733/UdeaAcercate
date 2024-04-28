"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
let DeleteManyCommentSentimentArgs = exports.DeleteManyCommentSentimentArgs = class DeleteManyCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], DeleteManyCommentSentimentArgs.prototype, "where", void 0);
exports.DeleteManyCommentSentimentArgs = DeleteManyCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCommentSentimentArgs);
