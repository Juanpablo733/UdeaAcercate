"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentSentimentCountAggregate = exports.CommentSentimentCountAggregate = class CommentSentimentCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentCountAggregate.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentCountAggregate.prototype, "_all", void 0);
exports.CommentSentimentCountAggregate = CommentSentimentCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentCountAggregate", {})
], CommentSentimentCountAggregate);
