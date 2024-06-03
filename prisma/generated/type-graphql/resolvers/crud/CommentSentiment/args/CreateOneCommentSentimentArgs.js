"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentCreateInput_1 = require("../../../inputs/CommentSentimentCreateInput");
let CreateOneCommentSentimentArgs = class CreateOneCommentSentimentArgs {
};
exports.CreateOneCommentSentimentArgs = CreateOneCommentSentimentArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentCreateInput_1.CommentSentimentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentSentimentCreateInput_1.CommentSentimentCreateInput)
], CreateOneCommentSentimentArgs.prototype, "data", void 0);
exports.CreateOneCommentSentimentArgs = CreateOneCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCommentSentimentArgs);
