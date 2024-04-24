"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let DeleteOneCommentSentimentArgs = exports.DeleteOneCommentSentimentArgs = class DeleteOneCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], DeleteOneCommentSentimentArgs.prototype, "where", void 0);
exports.DeleteOneCommentSentimentArgs = DeleteOneCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCommentSentimentArgs);
