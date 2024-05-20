"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CommentSentimentOrderByWithRelationInput = exports.CommentSentimentOrderByWithRelationInput = class CommentSentimentOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithRelationInput.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithRelationInput.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithRelationInput.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentOrderByWithRelationInput.prototype, "dateTime", void 0);
exports.CommentSentimentOrderByWithRelationInput = CommentSentimentOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentSentimentOrderByWithRelationInput", {})
], CommentSentimentOrderByWithRelationInput);
