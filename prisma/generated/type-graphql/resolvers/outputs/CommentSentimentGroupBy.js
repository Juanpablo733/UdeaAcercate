"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSentimentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentSentimentAvgAggregate_1 = require("../outputs/CommentSentimentAvgAggregate");
const CommentSentimentCountAggregate_1 = require("../outputs/CommentSentimentCountAggregate");
const CommentSentimentMaxAggregate_1 = require("../outputs/CommentSentimentMaxAggregate");
const CommentSentimentMinAggregate_1 = require("../outputs/CommentSentimentMinAggregate");
const CommentSentimentSumAggregate_1 = require("../outputs/CommentSentimentSumAggregate");
const Sentiment_1 = require("../../enums/Sentiment");
const Tag_1 = require("../../enums/Tag");
let CommentSentimentGroupBy = class CommentSentimentGroupBy {
};
exports.CommentSentimentGroupBy = CommentSentimentGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sentiment_1.Sentiment, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentGroupBy.prototype, "sentiment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSentimentGroupBy.prototype, "confidence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentSentimentGroupBy.prototype, "commentTag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CommentSentimentGroupBy.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentCountAggregate_1.CommentSentimentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentCountAggregate_1.CommentSentimentCountAggregate)
], CommentSentimentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentAvgAggregate_1.CommentSentimentAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentAvgAggregate_1.CommentSentimentAvgAggregate)
], CommentSentimentGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentSumAggregate_1.CommentSentimentSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentSumAggregate_1.CommentSentimentSumAggregate)
], CommentSentimentGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMinAggregate_1.CommentSentimentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMinAggregate_1.CommentSentimentMinAggregate)
], CommentSentimentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSentimentMaxAggregate_1.CommentSentimentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSentimentMaxAggregate_1.CommentSentimentMaxAggregate)
], CommentSentimentGroupBy.prototype, "_max", void 0);
exports.CommentSentimentGroupBy = CommentSentimentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSentimentGroupBy", {})
], CommentSentimentGroupBy);
