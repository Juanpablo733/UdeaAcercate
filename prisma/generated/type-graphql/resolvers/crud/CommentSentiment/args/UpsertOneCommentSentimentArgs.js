"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentCreateInput_1 = require("../../../inputs/CommentSentimentCreateInput");
const CommentSentimentUpdateInput_1 = require("../../../inputs/CommentSentimentUpdateInput");
const CommentSentimentWhereUniqueInput_1 = require("../../../inputs/CommentSentimentWhereUniqueInput");
let UpsertOneCommentSentimentArgs = class UpsertOneCommentSentimentArgs {
};
exports.UpsertOneCommentSentimentArgs = UpsertOneCommentSentimentArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentWhereUniqueInput_1.CommentSentimentWhereUniqueInput)
], UpsertOneCommentSentimentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentCreateInput_1.CommentSentimentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentCreateInput_1.CommentSentimentCreateInput)
], UpsertOneCommentSentimentArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentUpdateInput_1.CommentSentimentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentUpdateInput_1.CommentSentimentUpdateInput)
], UpsertOneCommentSentimentArgs.prototype, "update", void 0);
exports.UpsertOneCommentSentimentArgs = UpsertOneCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCommentSentimentArgs);
