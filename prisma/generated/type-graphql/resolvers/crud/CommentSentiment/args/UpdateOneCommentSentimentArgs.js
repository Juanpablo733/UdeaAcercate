"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentUpdateInput_1 = require("../../../inputs/CommentSentimentUpdateInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let UpdateOneCommentSentimentArgs = exports.UpdateOneCommentSentimentArgs = class UpdateOneCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentUpdateInput_1.CommentSentimentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentUpdateInput_1.CommentSentimentUpdateInput)
], UpdateOneCommentSentimentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], UpdateOneCommentSentimentArgs.prototype, "where", void 0);
exports.UpdateOneCommentSentimentArgs = UpdateOneCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCommentSentimentArgs);
