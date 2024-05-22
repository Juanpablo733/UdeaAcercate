"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let FindUniqueCommentSentimentArgs = exports.FindUniqueCommentSentimentArgs = class FindUniqueCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], FindUniqueCommentSentimentArgs.prototype, "where", void 0);
exports.FindUniqueCommentSentimentArgs = FindUniqueCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCommentSentimentArgs);
