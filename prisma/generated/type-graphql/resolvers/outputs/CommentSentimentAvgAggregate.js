"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentSentimentAvgAggregate = exports.CommentSentimentAvgAggregate = class CommentSentimentAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentAvgAggregate.prototype, "confidence", void 0);
exports.CommentSentimentAvgAggregate = CommentSentimentAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentAvgAggregate", {})
], CommentSentimentAvgAggregate);
