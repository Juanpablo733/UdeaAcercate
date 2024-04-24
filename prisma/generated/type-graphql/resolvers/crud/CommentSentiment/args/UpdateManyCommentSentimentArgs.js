"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentUpdateManyMutationInput_1 = require("../../../inputs/CommentSentimentUpdateManyMutationInput");
const CommentSentimentWhereInput_1 = require("../../../inputs/CommentSentimentWhereInput");
let UpdateManyCommentSentimentArgs = exports.UpdateManyCommentSentimentArgs = class UpdateManyCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentUpdateManyMutationInput_1.CommentSentimentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentUpdateManyMutationInput_1.CommentSentimentUpdateManyMutationInput)
], UpdateManyCommentSentimentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereInput_1.CommentSentimentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereInput_1.CommentSentimentWhereInput)
], UpdateManyCommentSentimentArgs.prototype, "where", void 0);
exports.UpdateManyCommentSentimentArgs = UpdateManyCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCommentSentimentArgs);
