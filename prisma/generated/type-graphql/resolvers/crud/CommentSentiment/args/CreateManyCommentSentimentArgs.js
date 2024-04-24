"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCommentSentimentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentCreateManyInput_1 = require("../../../inputs/CommentSentimentCreateManyInput");
let CreateManyCommentSentimentArgs = exports.CreateManyCommentSentimentArgs = class CreateManyCommentSentimentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentSentimentCreateManyInput_1.CommentSentimentCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCommentSentimentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCommentSentimentArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCommentSentimentArgs = CreateManyCommentSentimentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCommentSentimentArgs);
